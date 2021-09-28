import React, { useContext, useEffect, useRef, useState } from 'react';
import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  Radio,
  Row,
  Skeleton,
  Modal,
  Layout,
} from 'antd';
import {
  TeamOutlined,
  UnorderedListOutlined,
  TableOutlined,
} from '@ant-design/icons';
import { FaUsers } from '@react-icons/all-files/fa/FaUsers';
import { IoIosDocument } from '@react-icons/all-files/io/IoIosDocument';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MainContext } from 'renderer/contexts/MainContext';

const { Meta } = Card;
const { TextArea } = Input;

const ModalLayout = styled(Modal)`
  .ant-modal-content {
    .ant-modal-footer {
      button.ant-btn.ant-btn-primary {
        background-color: var(--purple-1);
        border: none;
      }
    }
  }
`;

export default function Groups() {
  const { isRouted, defineRoutedState, definePageInfo } =
    useContext(MainContext);
  const [form] = Form.useForm();
  const teamArray = [
    {
      id: 1,
      title: 'Time SonaGas',
      desc: 'description',
      menbers: 20,
      docs: 23,
      teamUrl: '/teste',
    },
    {
      id: 2,
      title: 'Slack Team 1',
      desc: 'description',
      menbers: 90,
      docs: 23,
      teamUrl: '/teste',
    },
    {
      id: 3,
      title: 'Zoom Teams',
      desc: 'description',
      menbers: 120,
      docs: 23,
      teamUrl: '/teste',
    },
    {
      id: 4,
      title: 'Discord Teams',
      desc: 'description',
      menbers: 220,
      docs: 23,
      teamUrl: '/teste',
    },
  ];

  useEffect(() => {
    // anchorRef();
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const onChangeInput = (e: any) => {
    console.log(e);
  };

  const onCancel = () => {
    setIsModalVisible(false);
  };

  const changeView = () => {};

  const onCreateGroup = (values: any) => {
    console.log(values);
    setIsModalVisible(false);
  };

  const setRoutState = (item: any) => {
    console.log('clicked');
    defineRoutedState(true);
    definePageInfo(item);
  };

  return (
    <>
      <Row justify="end">
        <Col span={4}>
          <Button
            icon={<TeamOutlined />}
            className="btn-action"
            onClick={showModal}
          >
            Nova equipe
          </Button>
        </Col>
        <Divider />
      </Row>
      <Row justify="end" style={{ padding: '0' }}>
        <Col span={4} style={{ padding: '0' }}>
          <Radio.Group value="large" onChange={changeView}>
            <Radio.Button value="large">
              <UnorderedListOutlined />
            </Radio.Button>
            <Radio.Button value="default">
              <TableOutlined />
            </Radio.Button>
          </Radio.Group>
        </Col>
      </Row>
      <Row
        className="cards-container"
        gutter={[8, 8]}
        style={{ paddingTop: '10px' }}
      >
        {teamArray.map((item, index) => (
          <Col key={item.id} span={8}>
            <Link to={`/group/${item.id}`} onClick={() => setRoutState(item)}>
              <Card
                style={{ width: '100%' }}
                actions={[
                  // eslint-disable-next-line react/jsx-key
                  [<FaUsers />, <span>{item.menbers}</span>],
                  // eslint-disable-next-line react/jsx-key
                  [<IoIosDocument />, <span>{item.docs}</span>],
                ]}
                className="teams-card"
              >
                <Skeleton loading={false} active>
                  <Meta title={item.title} description={item.desc} />
                </Skeleton>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
      <ModalLayout
        visible={isModalVisible}
        title="Create a new collection"
        okText="Create"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            // eslint-disable-next-line promise/always-return
            .then((values) => {
              form.resetFields();
              onCreateGroup(values);
            })
            .catch((info) => {
              console.log('Validate Failed:', info);
            });
        }}
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          initialValues={{
            modifier: 'public',
          }}
        >
          <Form.Item
            name="title"
            label="Nome da equipe"
            rules={[
              {
                required: true,
                message: 'Please input the title of collection!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Descrição"
            rules={[
              {
                required: true,
                message: 'Please input the title of collection!',
              },
            ]}
          >
            <TextArea
              placeholder="textarea with clear icon"
              allowClear
              onChange={onChangeInput}
            />
          </Form.Item>
          {/* <Form.Item
    name="description"
    label="Descrição"
    rules={[
      {
        required: true,
        message: 'Please input the title of collection!',
      },
    ]}
  >
    {hashes.inputVisible && (
      <Input
        ref={saveInputRef}
        type="text"
        size="small"
        style={{ width: 78 }}
        value={hashes.inputValue}
        onChange={handleInputChange}
        onBlur={handleInputConfirm}
        onPressEnter={handleInputConfirm}
      />
    )}
    {!hashes.inputVisible && (
      <Tag onClick={showInput} className="site-tag-plus">
        <PlusOutlined /> New Tag
      </Tag>
    )}
  </Form.Item> */}
        </Form>
      </ModalLayout>
    </>
  );
}
