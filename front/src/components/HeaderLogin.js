import React, { useState } from 'react';
import '../App.css';
import {Button, Nav} from 'react-bootstrap';

const HeaderLogin = () => {
  // 로그인 이후 로그아웃버튼
  return (
        <div className="Logout">
            <Nav className="ml-auto">
                <Nav.Link>
                    <Button
                        variant="primary"
                    >
                        로그아웃
                    </Button>
                </Nav.Link>
            </Nav>
        </div>
  );
};

export default HeaderLogin;
