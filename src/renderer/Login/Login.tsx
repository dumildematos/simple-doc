import React from 'react';
import { Layout, Carousel, Row, Col } from 'antd';
import styled from '@xstyled/styled-components';
import folder1 from './undraw_Add_notes_re_ln36.svg';

const { Content, Footer } = Layout;

const FolderSlider = styled.divBox`
  /* background-color: red; */
  height: 100vh;
  position: absolute;
  width: 100%;
  overflow: hidden;
  div.folder {
    position: absolute;
    right: -15%;
    &.folder-1 {
      height: 100%;
      width: 100%;
      background: #4c5fe1;
      transform: rotate(-15deg);
      border-radius: 20px;
      right: -18%;
      top: -5%;
    }
    &.folder-2 {
      height: 100%;
      width: 100%;
      background: #4c5fe1;
      transform: rotate(-30deg);
      border-radius: 20px;
      right: -25%;
      top: -4%;
      opacity: 0.9;
    }
    &.folder-3 {
      height: 100%;
      width: 100%;
      background: #4c5fe1;
      transform: rotate(-45deg);
      border-radius: 20px;
      top: 0;
      opacity: 0.9;
      right: -30%;
    }
  }
  div.slider-container {
    position: relative;
    height: 300px;
    width: 70%;
    margin: auto;
    margin-right: 0;
    margin-top: 25%;
    .ant-carousel {
      height: 100%;
      color: #fff;
      background: transparent;
      p {
        font-size: 12px;
      }
      img {
        margin: auto;
      }
    }
  }
`;

export default function Login() {
  return (
    <>
      <Layout className="layout">
        <Content style={{ padding: '0 0 0 50px' }}>
          <div className="site-layout-content style={{ height: '100%' }}">
            <Row style={{ height: '100%' }}>
              <Col span={12} style={{ height: '100%' }}>
                col-12
              </Col>
              <Col span={12} style={{ height: '100%' }}>
                <FolderSlider>
                  <div className="folder folder-1" />
                  <div className="folder folder-2" />
                  <div className="folder folder-3" />
                  <div className="slider-container">
                    <Carousel autoplay>
                      <div>
                        <h3>Facilidade</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita kasd gubergren, no sea
                          takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                          ipsum dolor sit amet, consetetur sadipscing elitr.
                        </p>
                        <img src={folder1} width="200" />
                      </div>
                      <div>
                        <h3>2</h3>
                      </div>
                      <div>
                        <h3>3</h3>
                      </div>
                      <div>
                        <h3>4</h3>
                      </div>
                    </Carousel>
                  </div>
                </FolderSlider>
              </Col>
            </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
}
