import styled from 'styled-components';

const MainLayout = styled.div`
  height: 100vh;
  padding: 0;
  .main-layout {
    height: 100vh;
    padding: 0;
    section.ant-layout.site-layout {
      background: ${(props) => props.theme.siteLayoutContainer} !important;
    }
  }
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
    background: ${props => props.theme.bgSidebar};
    ul.ant-menu {
      background: ${props => props.theme.bgSidebar};
      border-right-color: ${props => props.theme.bgSidebar};
    }
  }
  section.ant-layout {
    /* background: white; */
  }

  .site-layout {
    .site-layout-background {
      background: ${(props) =>
        !props.isRouted ? props.theme.navBg : 'transparent'};
      height: 50px;
      &.nav {
        display: flex;
        align-items: center;
        background: ${(props) => props.theme.navBg};
        .ant-page-header.site-page-header.ant-page-header-ghost.ant-page-header-compact {
          height: 100%;
          padding: 0;
          display: flex;
        }
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
      background: ${(props) => props.theme.cardBg};
      border-color: ${(props) => props.theme.cardBorderColor};
      cursor: pointer;
      border-bottom: 2px solid var(--purple-1);
      .ant-card-body {
        .ant-card-meta {
          .ant-card-meta-detail {
            .ant-card-meta-title,
            .ant-card-meta-description {
              color: ${(props) => props.theme.cardTexColor} !important;
            }
          }
        }
      }
      ul.ant-card-actions {
        background: ${(props) => props.theme.cardBg};
        border-color: ${(props) => props.theme.cardInnerBorderColor};
        li {
          border-color: ${(props) => props.theme.cardInnerBorderColor};
          span {
            color: ${(props) => props.theme.cardTexColor} !important;
          }
        }
      }
    }
  }
`;

export default MainLayout;
