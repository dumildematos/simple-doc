import React from 'react';
import { Avatar, Button, Card, Col, Row, Tooltip } from 'antd';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { BsPencil } from '@react-icons/all-files/bs/BsPencil';
import { HiOutlineDocumentAdd } from '@react-icons/all-files/hi/HiOutlineDocumentAdd';
import { IoIosDocument } from '@react-icons/all-files/io/IoIosDocument';
import { AntDesignOutlined, FileFilled, UserOutlined } from '@ant-design/icons';

const { Meta } = Card;


const GroupContainer = styled.div`
  /* background: red !important; */
  width: 100%;
  height: 100%;
  margin: 0;
  .ant-row {
    &.main {
      height: 100%;
    }
    .ant-col {
      border-radius: 3px;
      background: white;
      &.main {
        height: 100%;
      }
      padding: 12px;
      .btn-action-pmd {
        font-size: 1rem;
      }
      .ant-avatar-group {
      }
      &.doc-ls {
        padding: 0;
        border: 1px solid var(--purple-1);
        .doc-item {
          background-color: blue;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .square {
            width: 70px;
            height: 70px !important;
            background: green;
            svg {
              width: 100%;
            }
          }
        }
      }
    }
  }
`;

function Group(props: any) {
  // eslint-disable-next-line react/destructuring-assignment
  return (
    <GroupContainer>
      <Row justify="space-between" className="main">
        <Col span={8} className="main">
          <Row justify="space-between" style={{ height: 'auto' }}>
            <Col>
              <h4>Detalhes da equipe</h4>
            </Col>
            <Col>
              <Button type="link" size="small" className="btn-action-pmd">
                <BsPencil />
              </Button>
            </Col>
          </Row>
          <Row style={{ height: 'auto' }}>
            <Col span={24}>
              <h3>Nome da eqiupe</h3>
            </Col>
            <Col span={24}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                numquam minus incidunt molestias iusto repudiandae, a, est
                architecto unde fuga omnis mollitia nemo exercitationem! Aperiam
                ut suscipit aliquam optio necessitatibus.
              </p>
            </Col>
          </Row>
          <Row style={{ height: 'auto' }}>
            <Col span={24}>
              <h3>Membros</h3>
            </Col>
            <Col span={24}>
              <Avatar.Group>
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                <Tooltip title="Ant User" placement="top">
                  <Avatar
                    style={{ backgroundColor: '#87d068' }}
                    icon={<UserOutlined />}
                  />
                </Tooltip>
                <Avatar
                  style={{ backgroundColor: '#1890ff' }}
                  icon={<AntDesignOutlined />}
                />
              </Avatar.Group>
            </Col>
          </Row>
        </Col>
        <Col span={15} style={{ overflow: 'scroll' }} className="main">
          <Row justify="space-between" style={{ height: 'auto' }}>
            <Col>{/* <h4>Detalhes da equipe</h4> */}</Col>
            <Col>
              <Button type="link" size="small" className="btn-action-pmd">
                <HiOutlineDocumentAdd />
              </Button>
            </Col>
          </Row>
          <Row>
            <Col span={8} className="doc-ls">
              {/* <div className="doc-item">
                <div className="square">
                  <IoIosDocument />
                </div>
              </div>
              <div className="doc-item">documento.pdf</div> */}
              <Card style={{ width: 208 }}>
                <Meta
                  avatar={<Avatar icon={<FileFilled />} />}
                  title="Card title"
                />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </GroupContainer>
  );
}

export default withRouter(Group);
