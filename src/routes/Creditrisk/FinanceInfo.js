import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { connect } from 'dva';
import {
    Row,
    Col,
    Card,
    Steps,
    Input,
    Button,
    Progress,
    Upload,
    Form,
    Select,
    Icon,
    Menu,
    Tabs,
    Table,
    message
} from 'antd';

import Editor from 'wangeditor'

import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import classNames from 'classnames';
import styles from './FinanceInfo.less';
import { getTimeDistance, getQueryString } from '../../utils/utils';

const Step = Steps.Step;
const FormItem = Form.Item;
const InputGroup = Input.Group;
const Option = Select.Option;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;


//用户token
const token = getQueryString("token");


//数据校验简表表头
const checkColumns = [{
    title: '项目',
    dataIndex: 'subject',
    key: 'subject',
}, {
    title: '期初值',
    dataIndex: 'beginValue',
    key: 'beginValue',
}, {
    title: '期末值',
    dataIndex: 'endValue',
    key: 'endValue',
}];

@connect(({ financeInfo, loading }) => ({
    financeInfo,
    loading: loading.models.financeInfo
}))


export default class FinanceInfo extends Component {
    //参数
    state = {
        step: 1,//当前操作步骤 1:excel导入，2：行业类别选择, 3:数据预览，4：数据检验
        currstep:1,//已操作到的步骤，用于点击切换步骤是否可切换
        editor:null,//富文本编辑框
        excelindex:0,//定位当前上传的excel位置，0：最近，1:2018,2:2017,3:2016
    };
    //点击浏览，触发上传事件
    handleForUpload = (i) => {
        this.state.excelindex = i;
        var elem =document.getElementById("upload"+i);
        elem.click();
    }
    //上传文件
    handleUpload = (e) => {
        //获取上传的文件
        var file = e.target.files[0] || e.dataTransfer.files[0];
        //文件类型
        var filetype = file.type;
        //文件名
        var filename = file.name;
        //判断上传的文件是否为excel文件，否则提示
        if(filetype.indexOf('excel')<0 && filename.indexOf('xls')<0){
            message.error("请上传excel文件");
            return;
        }
        //显示文件名称
        e.target.parentNode.children[0].value = filename;

        //上传
        this.props.dispatch({
            type: 'financeInfo/uploadFile',
            payload:{
              excelfile:file,
              enctype:"multipart/form-data",
              token:token,
              isCwfx:true
            }
        });
    }  
    
    //自动识别
    handleAutoRecognition = () => {

        this.setState({
            step: 2 ,
        });
    };
    //上一步
    handleBack = () => {
        this.setState({
            step: this.state.step-1 ,
        });
    };
    //智能分析
    handleAnalysis = () => {
        this.setState({
            step: 3 ,
        });
    };
    //生成报表
    handleReport = () => {

    };
    //预览
    handlePreview = () => {
        //初始化富文本编辑框
        this.state.editor = new Editor(ReactDOM.findDOMNode(this._divEditorTool),ReactDOM.findDOMNode(this._divEditorText));
        this.state.editor.create();
        //设置当前步骤
        this.setState({
            step: 2,
        });
    };
    //修改报表
    handleUpdateContent = () => {

    }
    //保存修改简表
    handleEditCheck = () => {

    };
    //数据校验
    handleCheck = () => {
        this.setState({
            step: 4,
        });
    }
    //预览目录点击
    previewMenuClick = (e) => {
        console.log('click', e);
    }

    changeStep = () => {
        switch (this.state.step) {
            case 1:
                return this.step1();
                break;
            case 2:
                return this.step2();
                break;
            case 3:
                return this.step3();
                break;
            case 4:
                return this.step4();
                break;
            default:
                return this.step1();
                break;
        }
    }

    //上传报表
    step1 = () => {
        return (
            <div className={styles.stepdiv}>
                <Row  gutter={24}>
                    <Col xl={12}>
                        <Card className={styles.content}
                            title="Excel报表选择"
                        >
                            <p>
                                <label className={styles.lblexcel}>最近一期
                                <select className={styles.reporttype} v-model="reporttype">
                                    <option value="0" selected>年度报表</option>
                                    <option value="1">月度报表</option>
                                    <option value="2">季度报表</option>
                                    <option value="3">年中报表</option>
                                </select>
                                </label>

                                <span className={styles.fileupload}>
                                    <input type="text" className={styles.filename}/>
                                    <a className={styles.btnUpload} onClick={this.handleForUpload.bind(this,0)}>浏览</a>
                                    <input id="upload0"  ref={(ref) => this.upload0 = ref}  type="file" style={{opacity:0}} onChange={this.handleUpload.bind(this)}/>
                                </span>
                            </p>
                            <p>
                                <label className={styles.lblexcel}>上一年财务报表</label>
                                <span className={styles.fileupload}>
                                    <input type="text" className={styles.filename}/>
                                    <a className={styles.btnUpload} onClick={this.handleForUpload.bind(this,1)}>浏览</a>
                                    <input id="upload1" type="file" style={{opacity:0}} onChange={this.handleUpload.bind(this)}/>
                                </span>
                            </p>
                            <p>
                                <label className={styles.lblexcel}>前两年财务报表</label>
                                <span className={styles.fileupload}>
                                    <input type="text" className={styles.filename}/>
                                    <a className={styles.btnUpload} onClick={this.handleForUpload.bind(this,2)}>浏览</a>
                                    <input id="upload2" type="file" style={{opacity:0}} onChange={this.handleUpload.bind(this)}/>
                                </span>
                            </p><p>
                                <label className={styles.lblexcel}>前三年财务报表</label>
                                <span className={styles.fileupload}>
                                    <input type="text" className={styles.filename}/>
                                    <a className={styles.btnUpload} onClick={this.handleForUpload.bind(this,3)}>浏览</a>
                                    <input id="upload3" type="file" style={{opacity:0}} onChange={this.handleUpload.bind(this)}/>
                                </span>
                            </p>
                            <Row style={{ textAlign: 'center' }}>
                                <Button type="primary">提交</Button>
                            </Row>
                        </Card>
                    </Col>
                    <Col xl={12}>
                        <Card title="内容映射">
                            <Row>
                                <FormItem
                                    label='资产负载表'
                                    labelCol={{ span: 6 }}
                                    wrapperCol={{ span: 18 }}>
                                    <Select style={{ width: '100%' }}></Select>
                                </FormItem>
                            </Row>
                            <Row>
                                <FormItem
                                    label='损益表'
                                    labelCol={{ span: 6 }}
                                    wrapperCol={{ span: 18 }}>
                                    <Select style={{ width: '100%' }}></Select>
                                </FormItem>
                            </Row>
                            <Row>
                                <FormItem
                                    label='现金流量表'
                                    labelCol={{ span: 6 }}
                                    wrapperCol={{ span: 18 }}>
                                    <Select style={{ width: '100%' }}></Select>
                                </FormItem>
                            </Row>
                            <Row style={{ textAlign: 'center' }}>
                                <Button type="primary">获取表头</Button>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row className={styles.stepBtns}>
                    <Button type="primary" onClick={this.handleAutoRecognition}>自动识别</Button>
                </Row>
            </div>
        );
    }
    //行业选择
    step2 = () => {
        return (
            <div className={styles.stepdiv}>
                <Row>
                    <FormItem
                        label='企业名称'
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 18 }}>
                        <Input />
                    </FormItem>

                    <FormItem
                        label='行业关键字'
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 18 }}>
                        <Input.Search
                            placeholder="请输入"
                            enterButton="搜索"
                            size="large"
                            onSearch={this.handleFormSubmit}
                            style={{ width: 522 }}
                        />
                    </FormItem>

                </Row>
                <Row className={styles.stepBtns}>
                    <Button type="primary" onClick={this.handleBack}>上一步</Button>
                    <Button type="primary" onClick={this.handleAnalysis}>智能分析</Button>
                </Row>
            </div>
        );
    }
    //报表预览
    step3 = () => {
        return (
            <div className={styles.stepdiv}>
                <h4 style={{textAlign:'center'}}>企业名称</h4>
                <Row>
                    <Col xl={4}>
                        <h5>目录结构</h5>
                        <Menu onClick={this.previewMenuClick}
                        style={{ width: '100%' }}
                        mode="inline">
                            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>导航一</span></span>}>
                            <Menu.Item key="1">选项1</Menu.Item>
                            <Menu.Item key="2">选项2</Menu.Item>
                            <Menu.Item key="3">选项3</Menu.Item>
                            <Menu.Item key="4">选项4</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>导航二</span></span>}>
                            <Menu.Item key="5">选项5</Menu.Item>
                            <Menu.Item key="6">选项6</Menu.Item>
                            <SubMenu key="sub3" title="三级导航">
                                <Menu.Item key="7">选项7</Menu.Item>
                                <Menu.Item key="8">选项8</Menu.Item>
                            </SubMenu>
                            </SubMenu>
                            <SubMenu key="sub4" title={<span><Icon type="setting" /><span>导航三</span></span>}>
                            <Menu.Item key="9">选项9</Menu.Item>
                            <Menu.Item key="10">选项10</Menu.Item>
                            <Menu.Item key="11">选项11</Menu.Item>
                            <Menu.Item key="12">选项12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Col>
                    <Col xl={20}>
                        <h5>报表预览
                            <a onClick={this.handleCheck}><img src="../../assets/finance/icon_check.png"/>数据校验</a>
                        </h5>
                        <div ref={(ref) => this._divEditorTool = ref} style={{border:'1px solid #ddd',backgroundColor:'#f1f1f1'}}></div>
                        <div ref={(ref) => this._divEditorText = ref} style={{height:'auto',minHeight:'384px',border:'1px solid #ddd',overflow:'none'}}></div>
                    </Col>
                </Row>
                <Row className={styles.stepBtns}>
                    <Button type="primary" onClick={this.handleBack}>上一步</Button>
                    <Button type="primary" onClick={this.handleReport}>生成报告</Button>
                    <Button type="primary" onClick={this.handleUpdateContent}>保存修改</Button>
                </Row>
            </div>
        );
    }
    //数据校验
    step4 = () => {
        return (
            <div className={styles.stepdiv}>
                <Row>
                    <h4>企业名称</h4>
                    <Col xl={4}>
                        <h5>财务Excel报表选择</h5>
                        <Menu onClick={this.handleClick}
                        style={{ width: '100%' }}
                        openKeys={this.state.openKeys}
                        onOpen={this.onToggle}
                        onClose={this.onToggle}
                        selectedKeys={[this.state.current]}
                        mode="inline">
                        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>导航一</span></span>}>
                        <Menu.Item key="1">选项1</Menu.Item>
                        <Menu.Item key="2">选项2</Menu.Item>
                        <Menu.Item key="3">选项3</Menu.Item>
                        <Menu.Item key="4">选项4</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>导航二</span></span>}>
                        <Menu.Item key="5">选项5</Menu.Item>
                        <Menu.Item key="6">选项6</Menu.Item>
                        <SubMenu key="sub3" title="三级导航">
                            <Menu.Item key="7">选项7</Menu.Item>
                            <Menu.Item key="8">选项8</Menu.Item>
                        </SubMenu>
                        </SubMenu>
                        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>导航三</span></span>}>
                        <Menu.Item key="9">选项9</Menu.Item>
                        <Menu.Item key="10">选项10</Menu.Item>
                        <Menu.Item key="11">选项11</Menu.Item>
                        <Menu.Item key="12">选项12</Menu.Item>
                        </SubMenu>
                    </Menu>
                    </Col>
                    <Col xl={20}>
                        <h5>数据检验</h5>
                        <Table columns={checkColumns}></Table>
                    </Col>
                </Row>
                <Row className={styles.stepBtns}>
                    <Button type="primary" onClick={this.handlePreview}>结果预览</Button>
                    <Button type="primary" onClick={this.handleEditCheck}>保存修改</Button>
                </Row>
            </div>
        );
    }

    render() {
        return (
            <PageHeaderLayout
                title="智能财务分析"
            >
                <Card>

                    <Row className={styles.steps}>
                        <Col xl={4}><div className={this.state.step==1?styles.step + ' ' + styles.step1 + ' ' + styles.cur:styles.step + ' ' + styles.step1}>财务Excel导入</div></Col>
                        <Col xl={4}><div className={styles.step + ' ' + styles.step2}>内容映射</div></Col>
                        <Col xl={4}><div className={this.state.step==2?styles.step + ' ' + styles.step3 + ' ' + styles.cur:styles.step + ' ' + styles.step3}>行业选择</div></Col>
                        <Col xl={4}><div className={styles.step + ' ' + styles.step4}>自动识别</div></Col>
                        <Col xl={4}><div className={this.state.step==3?styles.step + ' ' + styles.step5 + ' ' + styles.cur:styles.step + ' ' + styles.step5}>数据预览</div></Col>
                        <Col xl={4}><div className={styles.step + ' ' + styles.step6}>生成报告</div></Col>
                    </Row>

                    <div>{this.changeStep()}</div>

                </Card>
            </PageHeaderLayout>
        );
    }
}