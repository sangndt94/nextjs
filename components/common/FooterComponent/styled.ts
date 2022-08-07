import styled from "styled-components";

export const Styled_FooterComponent_Wrapper = styled.footer`
  margin-top: 80px;
  background-color: #293754;
  color: white;
  padding: 60px 150px 32px 150px;
  position: relative;
  .footer_component {
    &--social {
      position: absolute;
      top: -35px;
      right: 10px;
    }
    &--logo {
      margin-bottom: 45px;
    }
    &--about {
      &-download {
        &--title {
          margin-bottom: 6px;
        }
        &--wrap {
          padding: 7px;
          background-color: black;
          display: inline-block;
          margin-right: 10px;
          border-radius: 5px;
        }
      }
      &-social {
        padding-right: 200px;
        padding-bottom: 70px;
        &--title {
          margin-bottom: 6px;
        }
        img {
          margin-right: 10px;
        }
      }
    }
    &--info {
      margin-top: 24px;
      &-company {
        &--wrapper-1 {
          line-height: 2;
        }
        &--wrapper-2 {
          line-height: 2;
        }
        &--title {
          font-weight: 700;
          font-size: 16px;
          &.company {
            padding: 16px 0px;
          }
        }
        &--text {
          font-weight: 500;
          font-size: 14px;
        }
      }
      &-hotline {
        line-height: 2;
        &--title {
          font-weight: 700;
          font-size: 16px;
        }
        &--text {
          font-weight: 500;
          font-size: 12px;
        }
      }
      .footer_component--info-certificate {
        font-weight: 500;
        font-size: 12px;
        &--first {
          margin-bottom: 20px;
        }
      }
    }
    hr {
      border: 1px solid #516285;
    }
  }
`;

export const Styled_FooterComponent_CopyRight = styled.footer`
  background: #f93649;
  color: white;
  left: 0;
  right: 0;
  height: 35px;
  display: flex;
  align-items: center;
  padding-left: 150px;
  font-size: 12px;
  font-weight: 400;
`;
