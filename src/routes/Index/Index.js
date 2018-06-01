import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import {
  Row,
  Col,
  Icon,
  Card,
  Tabs,
  Table,
  Radio,
  DatePicker,
  Tooltip,
  Menu,
  Dropdown,
} from 'antd';
import numeral from 'numeral';
import {
  ChartCard,
  yuan,
  MiniArea,
  MiniBar,
  MiniProgress,
  Field,
  Bar,
  Pie,
  TimelineChart,
} from 'components/Charts';
import Trend from 'components/Trend';
import NumberInfo from 'components/NumberInfo';
import { getTimeDistance } from '../../utils/utils';

import styles from './Index.less';


@connect(({ zxIndex, loading }) => ({
  zxIndex,
  loading: loading.models.zxIndex,
}))

export default class Index extends Component {

  componentDidMount() {
    this.props.dispatch({
      type: 'zxIndex/getList',
      payload:{
        channel:0,
        type:1,
        pageNo:1,
        pageSize:9
      }
    });
  }

  render() {
    
    const { zxIndex  } = this.props;
   
    return (
      <Fragment>    
        <Row gutter={24}>
              <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                <div className={styles.salesRank}>
                  <h4 className={styles.rankingTitle}>新闻列表</h4>
                  <ul className={styles.rankingList}>
                    
                    {zxIndex.newsListData.map((item, i) => (
                      <li key={item.title}>
                        <span className={i < 3 ? styles.active : ''}>{i + 1}</span>
                        <span>{item.title}</span>
                        <span>{numeral(item.total).format('0,0')}</span>
                      </li>
                    ))} 
                  </ul>
                </div>
              </Col>
        </Row>
      </Fragment>
    );
  }
}
