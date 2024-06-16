/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 请将以下代码按照图示粘贴到对应位置
  USE_PASSAGE: 'wechat-test',
  
  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx12102412fe50ab49',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'a92b673936c27296251172812f248dcf',

  PROVINCE: '上海',
  CITY: '上海',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小氧同学',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oKooJ6TCiUfWj6AzDgHiNUIQW0MA',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'lQAGxmxxd4IRoSUfyf37KN05T2kxe12ovu0V2xX1Rm8',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '09-05',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '小氧同学', year: '2002', date: '09-05',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '	OoExDxHuREYRgik2zIdxSKJ_RtcfYeOxWXohXyIUNpQ',

  CALLBACK_USERS: [
    {
      name: '涨功率的野指针	',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oKooJ6ZkWT9VjK3dIHx-l-NVCg-I',
    }
  ],

}

module.exports = USER_CONFIG

