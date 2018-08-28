import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import {Card, Row, Col} from 'antd';

function IndexPage() {
  return (
    <div className={styles.layout}>
    <Row gutter={24}>
      <Col lg={6} md={12}>
        <Card>Card1</Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>Card2</Card>
      </Col>
      <Col lg={6} md={12}>
        <Card>Card3</Card>
      </Col>
      <Col lg={18} md={24}>
          <Card bordered={true}
            bodyStyle={{
              padding: '24px 36px 24px 0',
            }}
          >
            Card Sales(Big one)
          </Card>
        </Col>
    </Row>
  </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
