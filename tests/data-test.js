(function(root, data){
    typeof exports === 'object' && typeof module !== 'undefined' ? (module.exports = data) :
	typeof define === 'function' && define.amd ? define(['exports'], data) :
	(root.mainGrammar = data);
})(this, {
    'start': '&emsp;&emsp;<paragraph>',
    'paragraph': ['#10 <sentence><paragraph>', '<sentence>'],
    'sentence': '<sentence-content>。',
    'time-adv': [
        '<date-pronoun>前', '<date-pronoun>后', '在<date-pronoun>的同时', 
        '<person>正准备<action>时'
    ],
    'date-pronoun': ['高考', '考研', '<person><action>'],
    'sentence-content': ['<optional-time-adv><subsentence>'],
    'optional-time-adv': ['', '<time-adv>，'],
    'subsentence': '<person><action-perfect>',
    'person': [
        '<ee-person>', '等生', '计祘尺教大主教', '黑娃', 'WJ', 'DQ',
        '何肥', '老明', 
        '丁仪', '云天明', '章北海', '程心'
    ],
    'place': ['Lyon', 'Oak大', 'Oak院', '鲤鱼所', '人民大会堂', '图书馆', '囗囗部', '热大淤泥'],
    'optional-place': ['', '在<place>'],
    'action': ['耍MC', '喝冰红茶', '写Latex', '用<3dtool>做<3dobj>'],
    'action-perfect': [
        '在<mc-server>中搭建了<mc-structure>', '在抖群中<ee-group-action-perfect>',
        '<optional-place><action-perfect-with-place>'
    ],
    'action-perfect-with-place': [
        '发表了一篇关于<phys-topic>的prl', '成功黑掉了<person>的电脑','用<3dtool>做了<3dobj>', 
        '终于把<task>做完了', '喝了一口冰红茶', '点了一份外卖', '发表了一篇关于<phys-topic>的prl', 
        '成功黑掉了<person>的电脑'
    ],
    '3dtool': ['3dmax', 'blender', 'maya', 'povray'],
    '3dobj': ['submachine', '维度3', 'direaland', '<mc-server>里面的建筑'],
    'mc-server': ['生存3服', '建筑服', '手艺服', '新大陆', '主世界', '等生服'],
    'task': ['暑假作业', '毕业设计', '电子设计', '课程设计', '寒假作业'],
    'phys-topic': ['AdS/CFT', '凝聚态场论', '格点QCD', '重整化群', '有效场论', '有限温度场论', '量子信息', '粒子实验'],
    'ee-group-action-perfect': [
        '发了一条匿名信息', '用匿名聊天的开关刷了屏', '将<ee-person>禁言了<gag-time>', '给乙醇发了加群邀请'
    ],
    'ee-person': ['吴大右', '乙醇', '阿波', '哦豁哥波', '索尔', '有为'],
    'gag-time': ['十分钟', '一个小时', '一天', '23天59分59秒'],
    'mc-structure': ['高频红石电路', '红石计算机', '红石5级流水线CPU', '红石电梯', '全自动农场']
});