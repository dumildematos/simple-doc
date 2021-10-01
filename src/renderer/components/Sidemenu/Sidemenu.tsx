import React from 'react';
import { Avatar, Divider, Dropdown, Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  DownOutlined,
  MailOutlined,
  PieChartOutlined,
  SettingFilled,
} from '@ant-design/icons';
import styled from 'styled-components';

const { Sider } = Layout;
const { SubMenu } = Menu;

const MenuDropDown = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item icon={<DownOutlined />} disabled>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Item disabled>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Item icon={<SettingFilled />}>Configurações</Menu.Item>
    <Divider style={{ padding: 0 }} />
    <Menu.Item>Terminar Sessão</Menu.Item>
  </Menu>
);

export default function Sidemenu(props: any) {
  return (
    // eslint-disable-next-line react/destructuring-assignment
    <Sider trigger={null} collapsible collapsed={props.collapse.collapsed}>
      <div className="logo">
        <Avatar src="https://avatars.githubusercontent.com/u/10828841?s=400&u=56ba8276db1da2bc8dfee5532e0a677d40916b9e&v=4" />
        {!props.collapse.collapsed ? (
          <Dropdown overlay={MenuDropDown}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              Dumilde Matos <DownOutlined />
            </a>
          </Dropdown>
        ) : (
          ''
        )}
      </div>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
      >
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Option 1
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Option 2
        </Menu.Item>
        <Menu.Item key="3" icon={<ContainerOutlined />}>
          Option 3
        </Menu.Item>
        <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </SubMenu>
      </Menu>
    </Sider>
  );
}
