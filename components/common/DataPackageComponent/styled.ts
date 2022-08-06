import styled from "styled-components";

export const Styled_DataPackageComponent_WrapperPackage = styled.div`
  width: 1300px;
  background: #ffffff;
  border-radius: 26px;
  margin: auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  margin-top: 107px;
  .active {
    /* package red */
    border-radius: 30px;
    background: url("/images/background-package.png") center;
    transform: scale(1.2) !important;
    h1 {
      color: white;
    }
    h3 {
      color: white;
    }
    .data-package_price {
      color: white;
      &--title {
        color: white;
      }
    }
    .data-package_description {
      color: white;
    }
    .data-package_column--wrapper {
      position: absolute;
      bottom: 20px;
      width: 100%;
      padding: 0 20px;
    }
    &.data-package_column {
      height: 470px;
    }
    .data-package_price--wrapper {
      margin-top: 46px;
      margin-bottom: 91px;
    }
    /* end package red */
  }
  /* package normal */
  h1 {
    font-size: 40px;
    font-weight: 700;
  }
  h3 {
    font-weight: 700;
    font-size: 24px;
  }
  .data-package_description {
    font-weight: 400;
    font-size: 16px;
    color: #898989;
    display: flex;
    padding-top: 20px;
    img {
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
  }
  .data-package_price {
    font-weight: 700;
    font-size: 24px;
    &--title {
      font-weight: 400;
      font-size: 16px;
      color: #898989;
    }
  }
  .data-package_button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ef4444;
    button {
      padding: 12px 0px;
      border-radius: 30px;
      border: 2px solid #ef4444;
      background-color: white;
      font-size: 18px;
      width: 100%;
    }
  }
  .data-package_price--wrapper {
    margin: 21px 0px;
  }
  .data-package--most-popular {
    font-weight: 500;
    color: white;
    background: black;
    text-align: center;
    border-radius: 30px;
    position: absolute;
    top: 20px;
    right: 15px;
    padding: 5px 10px;
    font-size: 12px;
  }
  /* end package normal */
`;

export const Styled_DataPackageComponent_Info_Package = styled.div`
  .data-package_info-title {
    font-weight: 700;
    font-size: 64px;
    margin-top: 60px;
    margin-bottom: 40px;
    text-align: center;
  }
  .data-package_info-sub-title {
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    color: #565656;
  }
`;
