'use strict';
var rand = require('./randsen.js');
var a = rand.loader().load({
    'start': '&emsp;&emsp;<paragraph>',
    'paragraph': ['#10 <sentence><paragraph>', '<sentence>'],
    'sentence': '<sentence-content>。',
    'time-adv': ['<date-pronoun>前', '<date-pronoun>后', '在<date-pronoun>的同时'],
    'date-pronoun': ['高考', '考研', '<person>正在<action>时'],
    'sentence-content': ['<optional-time-adv><subsentence>'],
    'optional-time-adv': ['', '<time-adv>，'],
    'subsentence': '<person>在<place><action>',
    'person': ['吴大右', '等生', '乙醇', '阿波', '哦豁哥波'],
    'place': ['Lyon', 'Oak大', 'Oak院', '鲤鱼所', '人民大会堂', '图书馆', '囗囗部'],
    'action': ['耍MC', '喝冰红茶', '写Latex', '用<3dtool>做<3dobj>'],
    '3dtool': ['3dmax', 'blender', 'maya', 'povray'],
    '3dobj': ['submachine', '维度3', 'direaland', '<mc-server>里面的建筑'],
    'mc-server': ['生存3服', '建筑服', '手艺服', '新大陆', '主世界', '等生服']
}).done();

console.log(a());