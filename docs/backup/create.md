---
sidebar_position: 1
---

# 創建

## 功能介紹

此功能可說是本機器人的核心功能，這個功能簡單來說就是您可以使用 `/backup create` 來為本群創建一個備份，而創建完成後您可以在遇到被炸群時使用 `/backup load <ID>` 來為您的恢復您之前的備份。  
~~當然是希望各位不要使用到此指令~~

:::caution 請注意
請不要隨意使用 `/backup load <ID>` ，否則您的群組可能會發生不可逆的後果，可能會發生的後果及錯誤可至 [本頁面](./bug) 來查看。
:::

## 如何使用備份功能

以下是創建備份的詳細步驟介紹及操作。

## 第一步 - 創建備份
如需使用備份功能，請在聊天室打上 `/backup create` 即可使用備份功能來為您的群組創建備份。  

![使用備份指令](https://i.imgur.com/vY1nNPy.png)
<center>圖片來源: 自行截圖</center>

## 第二步 - 二次確認
使用指令後機器人會對您進行二次確認。  

![二次確認](https://i.imgur.com/TMv6CmC.png)
<center>圖片來源: 自行截圖</center>

## 第三步 - 選擇
點開下方的選單選則繼續創建備份。  

![繼續創建](https://i.imgur.com/NPv1m3f.png)
<center>圖片來源: 自行截圖</center>

## 第四步 - 等待完成
選擇完`繼續創建備份`後請等待機器人完成創建備份的作業。  

![創建中](https://i.imgur.com/WPwMuGt.png)
<center>圖片來源: 自行截圖  </center>

:::info 貼心小提示
創建備份所需要的時間與群組資料**成正比**。
:::

## 第五步 - 創建完成
最結果，請記得記住此上面寫的ID，如果忘記可以使用 `/backup list`。
來查看你所有備份過的備份，也可以使用 `/backup info <ID>` 來查看備份詳細資訊喔~~

![完成](https://i.imgur.com/34wWGUl.png)
<center>圖片來源: 自行截圖  </center>
