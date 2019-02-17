# EASON_EGG_NODE_SEED

个人的egg.js node seed

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org

### 项目规划
- [x] 引入mysql模块并封装公共方法;
- [x] 引入mongo模块并封装公共CRUD方法;
- [x] 连接redis;
- [ ] session过期请求失败;
- [ ] 日志模块规范封装;
- [ ] 通用catchError中间件开发及引入;


### 更新日志
#### 1.0.0
```
时间：2019-02-09
描述：初次提交文件，封装mysql及mongo的CRUD方法
