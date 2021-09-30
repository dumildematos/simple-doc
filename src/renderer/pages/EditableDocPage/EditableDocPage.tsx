import React, { useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import {
  Affix,
  Button,
  Col,
  Divider,
  Drawer,
  Layout,
  PageHeader,
  Row,
} from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LeftOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Sidemenu from 'renderer/components/Sidemenu/Sidemenu';
import { MainContext } from 'renderer/contexts/MainContext';
import Chat from 'renderer/components/Chat/Chat';

const { Header, Content } = Layout;
let inPage = false;
const MainLayout = styled(Layout)`
  height: 100vh;
  padding: 0;
  .trigger {
    padding: 0 24px;
    font-size: 18px;
    line-height: 64px;
    cursor: pointer;
    transition: color 0.3s;
  }

  .trigger:hover {
    color: #1890ff;
  }

  .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    .ant-avatar {
      border: 1px solid var(--purple-1);
    }
    p {
      margin: auto;
      font-weight: bold;
    }
  }

  .ant-layout-sider-children {
    background: var(--gray-1);
  }
  ul.ant-menu {
    background: var(--gray-1);
  }
  section.ant-layout {
    background: white;
    ${!inPage ? `background: white` : `background: red`}
  }
  .site-layout .site-layout-background {
    background: #fff;
    height: 50px;
    &.nav {
      display: flex;
      align-items: center;
      .ant-page-header.site-page-header.ant-page-header-ghost.ant-page-header-compact {
        height: 100%;
        padding: 0;
        display: flex;
      }
    }
  }

  .ant-menu-vertical .ant-menu-item::after,
  .ant-menu-vertical-left .ant-menu-item::after,
  .ant-menu-vertical-right .ant-menu-item::after,
  .ant-menu-inline .ant-menu-item::after {
    border-right: 3px solid var(--purple-1) !important;
  }

  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background: var(--purple-2);
    /* color: var(--purple-1); */
  }
  .ant-menu-submenu-title:hover {
    .ant-menu-title-content,
    svg,
    i {
      color: var(--purple-1);
    }
  }
  .btn-action {
    background: var(--purple-1);
    border: none;
    color: #fff;
  }
  .cards-container {
    overflow-x: hidden;
    overflow-y: scrool;
    .ant-card {
      cursor: pointer;
      border-bottom: 2px solid var(--purple-1);
    }
  }
`;

const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);
function EditableDocPage() {
  const {
    isRouted,
    defineRoutedState,
    groupPage,
    editorOpened,
    visibleDocSidebar,
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

  return (
    <>
      <MainLayout>
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
            <PageHeader
              className="site-page-header"
              onBack={() => {
                // window.history.back();
                defineRoutedState(false);
                definedEditorIsOpened(false);
                history.push('/');
              }}
              title={'Voltar'}
              // subTitle="This is a subtitle"
            />
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '60px 16px 15px 16px',
              padding: !isRouted ? 24 : 0,
              minHeight: 280,
              background: !isRouted ? 'inherit' : 'transparent',
            }}
          >
            {editorOpened && (
              <Affix style={{ position: 'absolute', top: '50%', right: '0' }}>
                <Button type="primary" size="small" onClick={showDrawer}>
                  <LeftOutlined />
                </Button>
              </Affix>
            )}

            <Drawer
              title="Basic Drawer"
              placement="right"
              width={440}
              onClose={onCloseDrawer}
              visible={visibleDocSidebar}
            >
              <p
                className="site-description-item-profile-p"
                style={{ marginBottom: 24 }}
              >
                Membros
              </p>
              <p className="site-description-item-profile-p">Personal</p>
              <Row>
                <Col span={12}>
                  <DescriptionItem title="Full Name" content="Lily" />
                </Col>
                <Col span={12}>
                  <DescriptionItem
                    title="Account"
                    content="AntDesign@example.com"
                  />
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <DescriptionItem title="City" content="HangZhou" />
                </Col>
                <Col span={12}>
                  <DescriptionItem title="Country" content="China🇨🇳" />
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <DescriptionItem title="Birthday" content="February 2,1900" />
                </Col>
                <Col span={12}>
                  <DescriptionItem title="Website" content="-" />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <DescriptionItem
                    title="Message"
                    content="Make things as simple as possible but no simpler."
                  />
                </Col>
              </Row>
              <Divider />
              <p className="site-description-item-profile-p">Chat</p>
              <Row>
                <Col span={24}>
                  <Chat />
                </Col>
              </Row>
            </Drawer>
          </Content>
        </Layout>
      </MainLayout>
    </>
  );
}

export default withRouter(EditableDocPage);
