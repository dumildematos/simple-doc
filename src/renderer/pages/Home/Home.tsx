import React, { useContext, useEffect, useState } from 'react';
import { Layout, PageHeader } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Sidemenu from 'renderer/components/Sidemenu/Sidemenu';
import { MainContext } from 'renderer/contexts/MainContext';
import Groups from '../Groups/Groups';
import Group from '../Group/Group';
import MainLayout from '../../components/MainLayout/MainLayout';

const { Header, Content } = Layout;
let inPage = false;

const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

export default function Home({ theme }) {
  const {
    isRouted,
    defineRoutedState,
    groupPage,
    editorOpened,
    defineDocSideBar,
    definedEditorIsOpened,
  } = useContext(MainContext);
  useEffect(() => {
    inPage = isRouted;
    // console.log(inPage);
  }, [inPage, isRouted, MainLayout]);
  const history = useHistory();
  const [collapse, setCollapse] = useState({
    collapsed: false,
  });

  const [detailGroup, setDatailGroup] = useState(false);

  const [hashes, setHash] = useState({
    tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    inputVisible: false,
    inputValue: '',
  });

  const toggle = () => {
    setCollapse({
      collapsed: !collapse.collapsed,
    });
  };

  const handleInputConfirm = () => {
    const { inputValue } = hashes;
    let { tags } = hashes;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    console.log(tags);
    setHash({
      tags,
      inputVisible: false,
      inputValue: '',
    });
  };

  const openGroup = (group: any) => {
    console.log(group);
  };

  const showDrawer = () => {
    defineDocSideBar(true);
  };
  const onCloseDrawer = () => {
    defineDocSideBar(false);
  };
  console.log(theme);
  return (
    <>
      <MainLayout theme={theme} isRouted={isRouted}>
        <Layout className="main-layout">
          <Sidemenu collapse={collapse} />
          <Layout
            className="site-layout"
            style={{ padding: 0, background: 'inherit' }}
          >
            <Header
              className="site-layout-background nav"
              style={{
                position: 'fixed',
                zIndex: 1,
                width: '100%',
                padding: 0,
              }}
            >
              {React.createElement(
                collapse.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: 'trigger',
                  onClick: toggle,
                }
              )}
              {isRouted && (
                <PageHeader
                  className="site-page-header"
                  onBack={() => {
                    // window.history.back();
                    defineRoutedState(false);
                    definedEditorIsOpened(false);
                    history.push('/');
                  }}
                  title={groupPage.title}
                  // subTitle="This is a subtitle"
                />
              )}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '60px 16px 15px 16px',
                padding: !isRouted ? 24 : 0,
                minHeight: 280,
                // background: !isRouted ? 'theme.boxBg' : 'transparent',
              }}
            >
              {!isRouted && <Groups theme={theme} />}
              {isRouted && !editorOpened && <Group />}
            </Content>
          </Layout>
        </Layout>
      </MainLayout>
    </>
  );
}
