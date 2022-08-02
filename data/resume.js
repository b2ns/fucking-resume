import avatar from './avatar.jpeg';

/*
 * using fontawesome icon (6)
 * find your favourite icons here: https://fontawesome.com/search?m=free
 * prefix with `b-` if the icon is brand (e.g., `github` -> `b-github`)
 * prefix with `r-` if the icon is regular (e.g., `dot-circle` -> `r-dot-circle`)
 */

export default {
  name: { value: '抓根宝', icon: 'user-circle' },
  // optional
  job: { value: '双修法师', icon: 'r-dot-circle' },
  phone: { value: '110119911**', icon: 'phone' },
  // optional
  city: { value: '天际省', icon: 'map-marker' },
  email: { value: 'zhuagenbao@mail.com', icon: 'envelope' },
  // optional
  link: {
    url: 'https://github.com/****',
    value: '抓根宝的个人主页',
    icon: 'b-github',
  },
  // optional
  avatar: {
    url: avatar,
  },
  showPoweredBy: false,

  education: {
    title: '教育经历',
    icon: 'graduation-cap',
    list: [
      {
        college: '冬堡魔法学院',
        time: '2070.9-2074.7',
        major: '毁灭系',
        degree: '大法师',
      },
      {
        college: '高吼峰修道院',
        time: '2066.9-2070.7',
        major: '龙吼',
        degree: '龙裔',
      },
    ],
  },

  // optional
  skill: {
    title: '专业技能',
    icon: 'wrench',
    list: [
      '精通<b>龙吼</b>，秒杀一切',
      '熟练掌握<b>死灵召唤术</b>，召唤系大师奖获得者',
      '精通<b>毁灭系</b>法术，深入研究过其施法原理',
      '了解<b>炼金术</b>，并有实际使用经验',
    ],
  },

  work: {
    title: '工作经历',
    icon: 'briefcase',
    list: [
      {
        company: '法师公会',
        time: '2077.7-至今',
        // optional
        department: '研修部',
        // optional
        title: '大法师',
        // optional
        events: ['领导公会革命，开创法系双修新纪元'],
      },
      {
        company: '雪漫城',
        time: '2074.7-2077.7',
        department: '屠龙部',
        title: '屠龙人',
        events: ['完成领主巴尔古夫指派的主线任务，并接支线剧情任务'],
      },
    ],
  },
  project: {
    title: '项目经历',
    icon: 'code',
    list: [
      {
        name: '屠龙者',
        // optional
        desc: '屠杀恶龙奥杜因',
        events: [
          '主要屠龙负责人，致力于杀死爱叫自己Dovahkiin(龙语)的奥杜因',
          '为增强自身能力，单刷小龙，吸收龙魂，解锁龙吼之力，被膝盖中箭的帝国士兵看见，并确认了龙裔的身份',
          '为精进屠龙技能，师从龙吼大师灰胡子，习得风暴召唤、烈焰吐息、<b>龙魂撕裂</b>等技能',
          '通过阅读上古卷轴，发现奥杜因藏身于英灵殿，只身前往英灵殿，与恶龙鏖战，一击龙魂撕裂将恶龙击落，跟着一顿魔法输出，将其成功击杀',
        ],
      },
      {
        name: '黎明守卫',
        // optional
        desc: '猎杀吸血鬼',
        events: [
          '加入黎明守卫组织，参与猎杀吸血鬼',
          '只身前往暗黑墓穴寻找吸血鬼的线索，打倒埋伏的石像鬼并抵制住了吸血鬼的蛊惑，后成功返回',
          '为得到猎杀吸血鬼的上古神弓，付出血祭的代价传送至灵魂石冢收集线索，并最终拿到神器',
          '与吸血鬼头领赫冈展开boss战，利用神弓打断其回血技能，一技龙吼将其化为血水',
        ],
      },
      {
        name: '龙裔(Dragonborn)',
        // optional
        desc: '杀死假龙裔秘拉克',
        events: [
          '龙裔本裔，打假冒牌货的当事人',
          '为找到秘拉克，乘北方处女号来到晨风省的索瑟海姆，并前往一座所谓的秘拉克神殿进行调查',
          '利用神庙钥匙进入神庙圣所，阅读一本黑暗经书后遁入异界空间，得知秘拉克的阴谋',
          '为对付秘拉克，开启龙吼"意志屈服"的全阶段训练',
          '再次来到异界空间，利用龙吼之意志屈服，解决掉这个冒牌货，成为唯一的龙裔',
        ],
      },
    ],
  },
};
