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
        { item: "砖", points: 3 },
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
      ],
      like: [
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
        { item: "孔雀菊（花）", points: 2 },
        { item: "毒液弹", points: 2 },
        { item: "芥末", points: 2 },
        { item: "弹药", points: 2 },
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
