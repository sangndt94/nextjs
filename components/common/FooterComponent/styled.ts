import styled from "styled-components";

export const Styled_FooterComponent_Wrapper = styled.footer`
  background-color: #293754;
  color: white;
  padding: 60px 150px 32px 150px;
  .footer_component {
    &--logo {
        margin-bottom: 45px;
    }
    &--about{
        &-download{
            &--title{
                margin-bottom: 6px;
            }
            &--wrap{
                padding: 7px;
                background-color: black;
                display: inline-block;
                margin-right: 10px;
                border-radius: 5px;
            }
        }
        &-social{
            padding-right: 200px;
            padding-bottom: 70px;
            &--title{
                margin-bottom: 6px;
            }
            img{
                margin-right: 10px;
            }
        }
    }
    &--copyright{
        background: #F93649;
    }
    hr{
        border: 1px solid #516285;
    }
  }
`;
