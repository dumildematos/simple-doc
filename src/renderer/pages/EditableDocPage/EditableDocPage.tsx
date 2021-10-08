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
import { MainContext } from 'renderer/contexts/MainContext';
import Chat from 'renderer/components/Chat/Chat';
import MainLayout from 'renderer/components/MainLayout/MainLayout';
import Editor, {
  createEditorStateWithText,
  composeDecorators,
} from '@draft-js-plugins/editor';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import createInlineToolbarPlugin from '@draft-js-plugins/inline-toolbar';
import createSideToolbarPlugin from '@draft-js-plugins/side-toolbar';
import createImagePlugin from '@draft-js-plugins/image';

import createAlignmentPlugin from '@draft-js-plugins/alignment';
import createFocusPlugin from '@draft-js-plugins/focus';
import createResizeablePlugin from '@draft-js-plugins/resizeable';
import createBlockDndPlugin from '@draft-js-plugins/drag-n-drop';
import createDragNDropUploadPlugin from '@draft-js-plugins/drag-n-drop-upload';

const { Header, Content } = Layout;
let inPage = false;

const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;

const sideToolbarPlugin = createSideToolbarPlugin();
const { SideToolbar } = sideToolbarPlugin;

const focusPlugin = createFocusPlugin();
const resizeablePlugin = createResizeablePlugin();
const blockDndPlugin = createBlockDndPlugin();
const alignmentPlugin = createAlignmentPlugin();
const { AlignmentTool } = alignmentPlugin;

const decorator = composeDecorators(
  resizeablePlugin.decorator,
  alignmentPlugin.decorator,
  focusPlugin.decorator,
  blockDndPlugin.decorator
);

const imagePlugin = createImagePlugin({ decorator });

const dragNDropFileUploadPlugin = createDragNDropUploadPlugin({
  handleUpload: null,
  addImage: imagePlugin.addImage,
});

const plugins = [
  inlineToolbarPlugin,
  sideToolbarPlugin,
  dragNDropFileUploadPlugin,
  blockDndPlugin,
  focusPlugin,
  alignmentPlugin,
  resizeablePlugin,
  imagePlugin,
];

const initialState = {
  entityMap: {
    0: {
      type: 'IMAGE',
      mutability: 'IMMUTABLE',
      data: {
        src: 'https://i.gadgets360cdn.com/large/loki_tom_hiddleston_crop_1622797154582.jpg',
      },
    },
  },
  blocks: [
    {
      key: '9gm3s',
      text: 'You can have images in your text field. This is a very rudimentary example, but you can enhance the image plugin with resizing, focus or alignment plugins.',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: 'ov7r',
      text: ' ',
      type: 'atomic',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [
        {
          offset: 0,
          length: 1,
          key: 0,
        },
      ],
      data: {},
    },
    {
      key: 'e23a8',
      text: 'See advanced examples further down …',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
  ],
};

const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);
function EditableDocPage({ theme }) {
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
  const [editor, setEditor] = useState({
    editorState: EditorState.createWithContent(convertFromRaw(initialState)),
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

  const showDrawer = () => {
    defineDocSideBar(true);
  };
  const onCloseDrawer = () => {
    defineDocSideBar(false);
  };

  const onChangeText = (editorState: any) => {
    // const value = blocks.map(block => (!block.text.trim() && '\n') || block.text).join('\n');
    setEditor({
      editorState,
    });
    // const editorState = EditorState.createWithContent(contentState);
    // const blocks = convertToRaw(editorState.getCurrentContent()).blocks;
    const rows = convertToRaw(editor.editorState.getCurrentContent());
    const { blocks } = rows;
    console.log(blocks);
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
              title="Documentalçao de acesso ao sistema"
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
            <Editor
              editorState={editor.editorState}
              onChange={onChangeText}
              placeholder="Tell your story..."
              plugins={plugins}
            />
            <SideToolbar />
            <InlineToolbar />
            <AlignmentTool />

            <Affix style={{ position: 'fixed', top: '50%', right: '0' }}>
              <Button type="primary" size="small" onClick={showDrawer}>
                <LeftOutlined />
              </Button>
            </Affix>

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
