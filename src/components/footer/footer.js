import React from "react";
import "./footer.css"
import {
  CDBFooter,
  CDBFooterLink,
  CDBBtn,
  CDBIcon,
  CDBContainer, 
  CDBBox
} from "cdbreact";

export default class footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <CDBFooter className="shadow" id="footer">
        <CDBBox
          display="flex"
          justifyContent="between"
          alignItems="center"
          className="mx-auto py-4 flex-wrap"
          style={{ width: "80%" }}
          
        >
          <CDBBox display="flex" alignItems="center">
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img
                alt="logo"
                src="https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/301896385_474906577982551_3720569550789031312_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHSGYiUbQcqD9Y3QcCeWiV1n5TeOIo3y5iflN44ijfLmJGifW-xP90CphXKwzPwDeM&_nc_ohc=3HZZNJP9DxYAX_YNJSn&_nc_ht=scontent-bog1-1.xx&oh=00_AfBgkIdC44v3OMqFyDcTI1uia0RJ0ZjjDTLlICPPO29AWA&oe=638108CD"
                width="30px"
              />
              <span className="ml-4 h5 mb-0 font-weight-bold">Viboral Biodiverso</span>
            </a>
            <small className="ml-2">
              &copy; Maria Adelaida Patiño, 2022. All rights reserved.
            </small>
          </CDBBox>
          <CDBBox display="flex" >
            <CDBBtn className="p-2" id="facebook">
              <CDBIcon fab icon="facebook-f" />
            </CDBBtn>
            <CDBBtn className="mx-3 p-2" id="twitter">
              <CDBIcon fab icon="twitter" />
            </CDBBtn>
            <CDBBtn className="p-2" id="intagram">
              <CDBIcon fab icon="instagram" />
            </CDBBtn>
          </CDBBox>
        </CDBBox>
      </CDBFooter>
    );
  }
}
