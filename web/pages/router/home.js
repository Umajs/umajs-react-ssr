import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.goAboutPage = this.goAboutPage.bind(this);
        this.goAboutPageByQuery = this.goAboutPageByQuery.bind(this);
    }

    goAboutPage() {
        this.props.history.push({
            pathname: '/about',
            state: {
                msg: '来自首页的问候！by state', // 页面刷新后依然保持
            },
        });
    }

    goAboutPageByQuery() {
        this.props.history.push({
            pathname: '/about',
            query: {
                msg: '我是js query url参数', // query查询参数不表现在URL上 页面刷新后消失
            },
            search: '?query=aaa', // 携带到URL上面的search
        });
    }

    render() {
        return (
            <div>
                我是首页路由
                <br />
                <Link to="/about?msg='我是url参数'">去关于我的页面 url传递参数</Link>
                <br />
                <Link to="/about/我是url参数">去关于我的页面 路由配置传递参数</Link>
                <div onClick={this.goAboutPage}>去关于我的页面 js方式state传递参数</div>
                <div onClick={this.goAboutPageByQuery}>去关于我的页面 js方式query传递参数</div>
            </div>
        );
    }
}
