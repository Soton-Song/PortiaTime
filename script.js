// 模拟的 JSON 数据
const data = [
  {
    character: "许医生",
    date: "冬4日",
    preferences: {
      favorite: [
        { item: "持刀玩偶", points: 20 },
        { item: "西兰花王冠", points: 18 },
        { item: "气球饮料瓶", points: 15 },
        { item: "精钢小铲子", points: 15 },
        { item: "东漫游记", points: 15 },
        { item: "橙色沙发", points: 15 },
        { item: "深思者", points: 15 },
        { item: "神灯", points: 12 },
        { item: "神奇玻璃罐", points: 12 },
        { item: "酱烤鲑鱼片", points: 10 },
        { item: "玫瑰花", points: 10 },
        { item: "椰汁牛排", points: 10 },
        { item: "锥形壁灯", points: 10 }
      ],
      like: [
        { item: "护身符", points: 8 },
        { item: "红宝石", points: 8 },
        { item: "药汁", points: 6 },
        { item: "草药泥", points: 6 },
        { item: "简易药膏", points: 6 },
        { item: "苹果汁", points: 3 },
        { item: "蘑菇炖肉", points: 3 },
        { item: "解毒草", points: 2 },
        { item: "草药", points: 2 },
        { item: "白色木槿花", points: 2 }
      ]
    }
  },
  {
    character: "盖斯特",
    date: "夏11日",
    preferences: {
      favorite: [
        { item: "三层书柜", points: 30 },
        { item: "双层斗柜", points: 30 },
        { item: "壁炉", points: 25 },
        { item: "猫头鹰钟", points: 20 },
        { item: "挂壁花篮", points: 18 },
        { item: "培根刃鱼卷", points: 15 },
        { item: "三种建筑书", points: 15 },
        { item: "格子地毯", points: 15 },
        { item: "飞机模型", points: 15 },
        { item: "深思者", points: 15 },
        { item: "红菇刃鱼粥", points: 15 },
        { item: "帆船模型", points: 12 },
        { item: "雨伞", points: 12 },
        
      ],
      like: [
        { item: "红宝石", points: 8 },
        { item: "高脚玻璃杯", points: 6 },
        { item: "香水苹果", points: 6 },
        { item: "盐烤跳鱼", points: 6 },
        { item: "咸咸的杂烩", points: 6 },
        { item: "蓝宝石", points: 5 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
        { item: "松果", points: 2 }
      ],
      neutral: [
      ]
    }
  },
  {
    character: "明特",
    date: "春1日",
    preferences: {
      favorite: [
        { item: "按摩椅", points: 30 },
        { item: "画作:织女星", points: 30 },
        { item: "小型铁艺花架", points: 25 },
        { item: "机器人雕塑", points: 20 },
        { item: "实木沙发", points: 20 },
        { item: "梦幻台灯", points: 18 },
        { item: "熏香炉", points: 15 },
        { item: "色王汤", points: 15 },
        { item: "球形奖杯", points: 15 },
        { item: "红菇刃鱼粥", points: 12 },
        { item: "潜水头盔", points: 12 },
        { item: "黄金萝卜羹", points: 12 },
        { item: "怪兽玩偶", points: 10 },
        { item: "玫瑰花", points: 10 }
      ],
      like: [
        { item: "压花地毯", points: 8 },
        { item: "红宝石", points: 8 },
        { item: "奶油鲑鱼汤", points: 7 },
        { item: "多肉盆栽", points: 7 },
        { item: "蓝宝石", points: 5 },
        { item: "刃鱼", points: 4 },
        { item: "金鲑", points: 4 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
        { item: "虾肉", points: 2 },
        { item: "草莓", points: 2 },
      ],
      neutral: [
      ]
    }
  },
  {
    character: "艾伯特",
    date: "夏10日",
    preferences: {
      favorite: [
        { item: "鲜红领结", points: 20 },
        { item: "持杖玩偶", points: 20 },
        { item: "三角墨镜", points: 20 },
        { item: "奔马雕塑", points: 15 },
        { item: "金项链", points: 15 },
        { item: "孔雀菊盆栽", points: 15 },
        { item: "潜艇模型", points: 12 },
        { item: "老式电话", points: 12 },
        { item: "玫瑰花", points: 10 },
        { item: "辣味鱼奠", points: 10 }
      ],
      like: [
        { item: "红宝石", points: 8 },
        { item: "香皂", points: 8 },
        { item: "护身符", points: 8 },
        { item: "彩虹花盆栽", points: 6 },
        { item: "野玫瑰盆栽", points: 6 },
        { item: "木雕羊驼", points: 6 },
        { item: "黄色领结", points: 6 },
        { item: "蓝宝石", points: 5 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
        { item: "石砖", points: 3 },
      ],
      neutral: [
      ]
    }
  },
  {
    character: "阿尔洛",
    date: "秋5日",
    preferences: {
      favorite: [
        { item: "合金剑", points: 15 },
        { item: "持矛玩偶", points: 15 },
        { item: "铁剑", points: 15 },
        { item: "拉力器", points: 12 },
        { item: "青铜剑", points: 12 },
        { item: "多功能军刀", points: 12 },
        { item: "火箭模型", points: 12 },
        { item: "帆船模型", points: 12 },
        { item: "海鲜面", points: 12 },
        { item: "便携式腰包", points: 12 },
        { item: "能源灯", points: 10 },
        { item: "辣味鱼羹", points: 10 },
        { item: "疯狂拌面", points: 10 },
      ],
      like: [
        { item: "红宝石", points: 8 },
        { item: "麻辣杂烩", points: 8 },
        { item: "经典肉酱面", points: 6 },
        { item: "蓝宝石", points: 5 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
        { item: "硬木长剑", points: 3 },
      ],
      neutral: [
      ]
    }
  },
  {
    character: "艾米莉",
    date: "春17日",
    preferences: {
      favorite: [
        { item: "包边地毯", points: 15 },
        { item: "种植指南", points: 15 },
        { item: "招财猫", points: 15 },
        { item: "东漫游记", points: 15 },
        { item: "大剧院", points: 15 },
        { item: "小黄鸡耳环", points: 12 },
        { item: "扇子模型", points: 12 },
        { item: "一串玉米", points: 12 },
        { item: "一串辣椒", points: 12 },
        { item: "玫瑰花", points: 12 },
        { item: "秋娃娃", points: 10 },
        { item: "水果沙拉", points: 10 },
        { item: "南瓜派", points: 10 },
        { item: "春娃娃", points: 10 },
        { item: "稻草人", points: 12 }
      ],
      like: [
        { item: "南瓜焖饭", points: 6 },
        { item: "红宝石", points: 8 },
        { item: "蓝宝石", points: 5 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
        { item: "鸡蛋", points: 2 },
        { item: "牛奶", points: 2 },
        { item: "肥料", points: 2 },
        { item: "南瓜", points: 2 },
        { item: "草莓", points: 2 },
      ],
      neutral: [
      ]
    }
  },
  {
    character: "安托因",
    date: "春10日",
    preferences: {
      favorite: [
        { item: "猫头鹰钟", points: 20 },
        { item: "白色靠背椅", points: 20 },
        { item: "猫鱼雕塑", points: 15 },
        { item: "招财猫", points: 15 },
        { item: "蓝宝石戒指", points: 15 },
        { item: "小挎包", points: 15 },
        { item: "扇子模型", points: 12 },
        { item: "水果沙拉", points: 10 },
        { item: "玫瑰花", points: 10 },
        { item: "春娃娃", points: 10 },
        { item: "蔬菜沙拉", points: 10 },
      ],
      like: [
        { item: "红宝石", points: 8 },
        { item: "黄色领结", points: 8 },
        { item: "胸针", points: 6 },
        { item: "水晶", points: 6 },
        { item: "画作:女孩", points: 6 },
        { item: "木雕羊驼", points: 6 },
        { item: "香皂", points: 5 },
        { item: "蓝宝石", points: 5 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "牛奶", points: 2 },
        { item: "贝壳", points: 2 },
      ],
      neutral: [
      ]
    }
  },
  {
    character: "李牧师",
    date: "秋9日",
    preferences: {
      favorite: [
        { item: "女神雕像", points: 20 },
        { item: "大剧院", points: 15 },
        { item: "纪念碑", points: 15 },
        { item: "太阳脸", points: 15 },
        { item: "茶壶", points: 12 },
        { item: "壁灯", points: 12 },
        { item: "果味蘑菇", points: 10 },
        { item: "油画笔", points: 10 },
        { item: "画作:远山", points: 10 },
        { item: "画作:巨石", points: 10 },
        { item: "瓷瓶", points: 10 },
        { item: "玫瑰花", points: 10 },
      ],
      like: [
        { item: "急救包", points: 6 },
        { item: "七彩柠檬汁", points: 6 },
        { item: "小号垃圾桶", points: 6 },
        { item: "蜡烛壁灯", points: 6 },
        { item: "薯果", points: 2 },
        { item: "孔雀菊（一束）", points: 2 },
        { item: "数据光盘", points: 4 },
        { item: "红宝石", points: 8 },
        { item: "蓝宝石", points: 8 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
      ],
      neutral: [
      ]
    }
  },
  {
    character: "麦当劳",
    date: "春4日",
    preferences: {
      favorite: [
        { item: "黄金将奖杯", points: 18 },
        { item: "奔马雕塑", points: 15 },
        { item: "落地灯", points: 15 },
        { item: "小马台灯", points: 15 },
        { item: "石狮子", points: 15 },
        { item: "黄鸭头盔", points: 12 },
        { item: "黑胶唱机", points: 12 },
        { item: "椰汁鸡丝焗饭", points: 10 },
        { item: "水桶", points: 10 },
      ],
      like: [
        { item: "横杆", points: 6 },
        { item: "麻布地毯", points: 6 },
        { item: "诱捕箱", points: 6 },
        { item: "红宝石", points: 8 },
        { item: "蓝宝石", points: 5 },
        { item: "黄宝石", points: 4 },
        { item: "卷心萝卜", points: 3 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
        { item: "肥料", points: 2 },
        { item: "木篮子", points: 2 },
      ],
      neutral: [
      ]
    }
  },
  {
    character: "三姐",
    date: "秋23日",
    preferences: {
      favorite: [
        { item: "红鹰", points: 25 },
        { item: "机器人模型", points: 20 },
        { item: "莲花灯", points: 15 },
        { item: "赛马纪念毯", points: 15 },
        { item: "三眼毒液", points: 15 },
        { item: "竹子香露", points: 12 },
        { item: "顶罐女人", points: 12 },
        { item: "晴天娃娃", points: 12 },
        { item: "皮垫方凳", points: 12 },
        { item: "火箭模型", points: 12 },
        { item: "便携式腰包", points: 12 },
        { item: "芝士虾焗饭", points: 10 },
        { item: "秘制鲑鱼炒饭", points: 10 },
        { item: "夏娃娃", points: 10 },
        { item: "春娃娃", points: 10 },
      ],
      like: [
        { item: "海鲜饭", points: 8 },
        { item: "红宝石", points: 8 },
        { item: "蓝宝石", points: 5 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
        { item: "孔雀菊（一束）", points: 2 },
        { item: "毒液弹", points: 2 },
        { item: "芥末", points: 2 },
        { item: "弹药", points: 2 },
      ],
      neutral: [
      ]
    }
  },
  {
    character: "马尔斯",
    date: "夏18日",
    preferences: {
      favorite: [
        { item: "渔夫镐", points: 20 },
        { item: "铁镐", points: 18 },
        { item: "格子方桌", points: 18 },
        { item: "猫鱼雕塑", points: 15 },
        { item: "工艺工具盒", points: 15 },
        { item: "石狮子", points: 15 },
        { item: "茶香气泡鱼羹", points: 12 },
        { item: "游戏手柄", points: 10 },
        { item: "旧水壶", points: 10 },
        { item: "打字机", points: 10 },
      ],
      like: [
        { item: "刚玉炉芯", points: 7 },
        { item: "盐烤跳鱼", points: 6 },
        { item: "青铜锭", points: 4 },
        { item: "猫儿跳", points: 4 },
        { item: "强壮猫儿跳", points: 4 },
        { item: "红宝石", points: 8 },
        { item: "蓝宝石", points: 8 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "辣椒牛肉汉堡", points: 3 },
        { item: "铜锭", points: 3 },
        { item: "打磨石", points: 2 },
      ],
      neutral: [
      ]
    }
  },
  {
    character: "普雷斯利",
    date: "夏23日",
    preferences: {
      favorite: [
        { item: "藤编靠背椅", points: 20 },
        { item: "马首雕塑", points: 18 },
        { item: "假山", points: 15 },
        { item: "奔马雕塑", points: 15 },
        { item: "飞机模型", points: 15 },
        { item: "石狮子", points: 15 },
        { item: "海鲜大杂烩", points: 15 },
        { item: "沉思者", points: 15 },
        { item: "茶具", points: 15 },
        { item: "金蟾", points: 12 },
        { item: "老式电话", points: 12 },
        { item: "玫瑰花", points: 10 },
      ],
      like: [
        { item: "盐烤跳鱼", points: 6 },
        { item: "福字", points: 4 },
        { item: "海苔", points: 4 },
        { item: "红宝石", points: 8 },
        { item: "蓝宝石", points: 8 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
      ],
      neutral: [
      ]
    }
  },
  {
    character: "鲁索",
    date: "春14日",
    preferences: {
      favorite: [
        { item: "持杖玩偶", points: 20 },
        { item: "持斧玩偶", points: 20 },
        { item: "画作:男孩", points: 18 },
        { item: "条纹休闲椅", points: 18 },
        { item: "假山", points: 15 },
        { item: "深色小桌", points: 15 },
        { item: "飞机模型", points: 15 },
        { item: "烤火鸡", points: 10 },
        { item: "椰汁牛排", points: 10 },
        { item: "电焊盔", points: 10 },
        { item: "玫瑰花", points: 10 },
      ],
      like: [
        { item: "电风扇", points: 6 },
        { item: "烟熏火腿", points: 6 },
        { item: "奇怪的镜子", points: 6 },
        { item: "香煎大排", points: 3 },
        { item: "奇怪镜片", points: 2 },
        { item: "红宝石", points: 8 },
        { item: "蓝宝石", points: 8 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
      ],
      neutral: [
      ]
    }
  },
  {
    character: "杰克",
    date: "冬24日",
    preferences: {
      favorite: [
        { item: "持刀玩偶", points: 20 },
        { item: "持矛玩偶", points: 20 },
        { item: "巴顿的眼镜", points: 18 },
        { item: "纸箱", points: 15 },
        { item: "婚庆鲜花", points: 15 },
        { item: "神灯", points: 12 },
        { item: "神奇玻璃罐", points: 12 },
        { item: "香水苹果", points: 10 },
        { item: "玫瑰花", points: 10 },
      ],
      like: [
        { item: "气球", points: 8 },
        { item: "辣椒牛肉汉堡", points: 4 },
        { item: "七彩柠檬汁", points: 4 },
        { item: "汽水", points: 3 },
        { item: "椰枣", points: 3 },
        { item: "红宝石", points: 8 },
        { item: "蓝宝石", points: 8 },
        { item: "黄宝石", points: 4 },
        { item: "孔雀菊", points: 3 },
        { item: "能源石", points: 3 },
      ],
      neutral: [
      ]
    }
  },
];

// 搜索功能
const searchInput = document.getElementById("search");
const resultsDiv = document.getElementById("results");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim();
  resultsDiv.innerHTML = ""; // 清空结果

  if (query) {
    data.forEach(character => {
      const matchedItems = [];

      // 搜索角色名
      if (character.character.includes(query)) {
        matchedItems.push(...Object.entries(character.preferences).flatMap(([key, items]) =>
          items.map(item => ({ ...item, type: key }))
        ));
      }

      // 搜索物品名
      Object.entries(character.preferences).forEach(([key, items]) => {
        items.forEach(item => {
          if (item.item.includes(query)) {
            matchedItems.push({ ...item, type: key });
          }
        });
      });

      // 显示匹配结果
      if (matchedItems.length > 0) {
        const characterDiv = document.createElement("div");
        characterDiv.className = "character";
        characterDiv.textContent = `角色: ${character.character} (${character.date})`;
        resultsDiv.appendChild(characterDiv);

        matchedItems.forEach(match => {
          const itemDiv = document.createElement("div");
          itemDiv.className = "item";
          itemDiv.textContent = `${match.type === "favorite" ? "非常喜欢" : match.type === "like" ? "喜欢" : "中立"}: ${match.item} (+${match.points})`;
          resultsDiv.appendChild(itemDiv);
        });
      }
    });
  }
});
