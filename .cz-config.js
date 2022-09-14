module.exports = {
  types: [
    { value: 'feat', name: 'feat: 新功能' },
    { value: 'fix', name: 'fix: bug修复' },
    { value: 'refactor', name: 'refactor: 代码修改，该修改既不是bug修复也不是添加新功能' },
    { value: 'style', name: 'style: 不影响代码含义的更改(空白、格式、缺少分号等)' },
    { value: 'docs', name: 'docs: 修改文档' },
    { value: 'perf', name: 'perf: 修改代码以提高性能' },
    { value: 'test', name: 'test: 添加缺失的测试或纠正现有测试' },
    { value: 'build', name: 'build: 影响构建系统或外部依赖的修改（示例范围：gulp, broccoli, npm）' },
    { value: 'ci', name: 'ci: 对CI配置文件和脚本的更改' },
    { value: 'chore', name: 'chore: 更改配置文件(其他的修改，不修改src源码也不修改测试源码)' },
    { value: 'revert', name: 'revert: 版本回退' },
    { value: 'add', name: 'add: 添加依赖' },
    { value: 'del', name: 'del: 删除代码/文件' },
    { value: 'init', name: 'init: 初始提交' },
    { value: 'complex', name: 'complex: 复合型提交(代码涉及以上多个)' },
  ],
  scopes: [],
  messages: {
    type: '<type>选择更改类型:\n',
    scope: '<scope>更改的范围:\n',
    subject: '<subject>简短描述:\n',
    body: '<body>详细描述. 使用"|"换行:\n',
    breaking: 'Breaking Changes列表:\n',
    footer: '<footer>关闭的issues列表. E.g.: #31, #34:\n',
    confirmCommit: '确认提交?',
  },
  // allowcustomscopes为true,在 scope 选择的时候，会有 empty 和 custom 可以选择,empty:空；custom：自己输入
  allowCustomScopes: true,
  // 如上设置为 ['feat', 'fix']，只有我们type选择了 feat 或者是 fix，才会询问我们 breaking message
  allowBreakingChanges: ['feat', 'fix'],
  // 描述的长度限制
  subjectLimit: 100,
}
