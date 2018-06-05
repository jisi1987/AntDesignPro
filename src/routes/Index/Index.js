import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import { Chart, Geom, Axis, ChartTooltip, Coord, Label, Legend, View, Guide, Shape } from 'bizcharts';
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
import { getTimeDistance, getQueryString } from '../../utils/utils';

import Area from 'components/Charts/Area';

import styles from './Index.less';


//用户token
const token = getQueryString("token");

const Yuan = ({ children }) => (
  <span>{children}家</span> /* eslint-disable-line react/no-danger */
);

@connect(({ zxIndex, loading }) => ({
  zxIndex,
  loading: loading.models.zxIndex,
}))

export default class Index extends Component {


  componentDidMount() {
    //新闻资讯
    this.props.dispatch({
      type: 'zxIndex/getNewsListData',
      payload:{
        channel:0,
        type:1,
        pageNo:1,
        pageSize:9
      }
    });
    //行业动态
    this.props.dispatch({
      type: 'zxIndex/getNewsListData',
      payload:{
        channel:0,
        type:2,
        pageNo:1,
        pageSize:9
      }
    });
    //我的代办客户
    this.props.dispatch({
      type: 'zxIndex/getCustomList',
      payload:{
        token:token,
        pageNo:1,
        pageSize:5
      }
    });
    //月度业绩排行榜
    this.props.dispatch({
      type: 'zxIndex/getHyfbData',
      payload:{}
    });
  }

  render() {
    
    const { zxIndex, loading  } = this.props;

    const tableData = [
      {
        key: '1',
        name: '张宇博',
        customnum: 32,
        sussnum: 7,
        total:'200万'
      }, {
        key: '2',
        name: '王晨冰',
        customnum: 23,
        sussnum: 6,
        total:'180万'
      },{
        key: '3',
        name: '杨向前',
        customnum: 21,
        sussnum: 6,
        total:'178万'
      },{
        key: '4',
        name: '魏雨辰',
        customnum: 19,
        sussnum: 5,
        total:'150万'
      },{
        key: '5',
        name: '陈心怡',
        customnum: 18,
        sussnum: 3,
        total:'90万'
      },{
        key: '6',
        name: '洪浩',
        customnum: 18,
        sussnum: 2,
        total:'50万'
      },{
        key: '7',
        name: '陈小凤',
        customnum: 15,
        sussnum: 2,
        total:'45万'
      },
    ];
    const tableColumns = [
      {
        title: '排名',
        dataIndex: 'key',
        key: 'key',
      },
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '营销客户',
        dataIndex: 'customnum',
        key: 'customnum',
      },	
      {
        title: '成功客户',
        dataIndex: 'sussnum',
        key: 'sussnum',
      },				
      {
        title: '信贷总额',
        dataIndex: 'total',
        key: 'total',
      },
    ];

    const customColumns = [
      {
        title: '客户名称',
        dataIndex: 'customerName',
        key: 'customerName',
      },
      {
        title: '申请时间',
        dataIndex: 'applyTime',
        key: 'applyTime',
      },
      {
        title: '申请额度',
        dataIndex: 'applyLimit',
        key: 'applyLimit',
      },	
      {
        title: '推荐授信(万元)',
        dataIndex: 'recommendedCredit',
        key: 'recommendedCredit',
      },				
      {
        title: '信用评分',
        dataIndex: 'creditScore',
        key: 'creditScore',
      },
      {
        title: '授信',
        key: 'operation1',
        render(text, record){
          return(
            <span>
              <a>接受</a>
              <span className="ant-divider"></span>
              <a>拒绝</a>
            </span>
          );
        }
      },
      {
        title: '财务报表',
        key: 'operation2',
        render(text, record){
          return(
            <span>
              <a>导入</a>
            </span>
          );
        }
      },
      {
        title: '基础报告',
        key: 'operation3',
        render(text, record){
          return(
            <span>
              <a>预览</a>
              <span className="ant-divider"></span>
              <a>下载</a>
            </span>
          );
        }
      },
      {
        title: '深度报告',
        key: 'operation4',
        render(text, record){
          return(
            <span>
              <a>预览</a>
              <span className="ant-divider"></span>
              <a>下载</a>
            </span>
          );
        }
      },
      {
        title: '全套打包',
        key: 'operation5',
        render(text, record){
          return(
            <span>
              <a>下载</a>
            </span>
          );
        }
      },
    ];
      const pieData = [
        {x: '纺织工业', y: 36 },
        {x: '商业贸易', y: 55 },
        {x: '住宿业', y: 16 },
        {x: '软件服务业', y: 30 },
        {x: '公共交通', y: 9 },
        {x: '鞋服贸易', y: 78 }
      ];
      const areaData = [
        {x:'一月', y:150 },
        {x:'二月', y:175 },
        {x:'三月', y:100 },
        {x:'四月', y:300 },
        {x:'五月', y:150 },
        {x:'六月', y:450 },
      ]
    const areaSols = {
      x: {
        range: [0, 1],
        alias:'时间',
      },
      y: {
        min: 0,
        alias:'额度',
      },
    };
    const areaColor='#7d86f0';

    return (
      <Fragment>  
        <Row gutter={24}>
          <Col xl={12} lg={24} md={24} sm={24} xs={24}>
            <Card
              loading={loading}
              className={styles.salesCard}
              bordered={false}
              title="客户行业分布"
              bodyStyle={{ padding: 12 }}
            >
              <Pie
                hasLegend
                data={pieData}
                valueFormat={value => <Yuan>{value}</Yuan>}
                height={248}
                lineWidth={4}
              />
            </Card>
          </Col>
          <Col xl={12} lg={24} md={24} sm={24} xs={24}>
            <Card
              loading={loading}
              className={styles.salesCard}
              bordered={false}
              title="放款额度(万元)"
            >
            <Area 
              color={areaColor}
              borderColor='#4a90e2' 
              scale={areaSols}
              data={areaData} 
              height={225}
            />
            </Card>
          </Col>
        </Row> 
        <Row>
        <Card
              bordered={false}
              title="月度业绩排行榜"
              style={{ marginTop: 24 }}
            >
              
             <Table
                rowKey={record => record.key}
                columns={tableColumns}
                dataSource={tableData}
                bordered
                pagination={false}
              />
            </Card>
        </Row>
        <Row>
        <Card
              bordered={false}
              title="我的待办客户"
              style={{ marginTop: 24 }}
            >
              
             <Table
                rowKey={record => record.id}
                columns={customColumns}
                dataSource={zxIndex.customListData}
                bordered
                pagination={false}
              />
            </Card>
        </Row>
        <Row gutter={24}>
              <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <Card
               bordered={false}
               title="新闻列表"
               style={{ marginTop: 24 }}
              >
                  <ul className={styles.rankingList}>
                    {zxIndex.newsListData.map((item, i) => (
                      <li key={item.title}>
                        <span className={i < 3 ? styles.active : ''}>{i + 1}</span>
                        <span>{item.title}</span>
                        <span>{numeral(item.total).format('0,0')}</span>
                      </li>
                    ))} 
                  </ul>
                </Card>
              </Col>
              <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <Card
               bordered={false}
               title="行业动态"
               style={{ marginTop: 24 }}
              >
                  <ul className={styles.rankingList}>
                    {zxIndex.hotsListData.map((item, i) => (
                      <li key={item.title}>
                        <span className={i < 3 ? styles.active : ''}>{i + 1}</span>
                        <span>{item.title}</span>
                        <span>{numeral(item.total).format('0,0')}</span>
                      </li>
                    ))} 
                  </ul>
                </Card>
              </Col>
        </Row>
      </Fragment>
    );
  }
}
