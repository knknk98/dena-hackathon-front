export type Chat = {
  message: string; // 送られた文字とか
  isMine: boolean; // trueなら自分の方に表示する
  request: boolean; // 「最近どうしてる？」かどうか
  date: string; // 時間
  iconImage: string; // アイコン画像
}