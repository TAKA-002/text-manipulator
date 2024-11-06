import React, { useContext, useEffect } from "react";
import { MyContext } from "../app";

export default function ReplaceOptions() {
  const { replaceObject, setReplaceObject } = useContext(MyContext);

  const handleReplaceObjectChange = (e) => {
    // オブジェクトの中に、key valueをもたせる。
    // keyをinputのname属性で。valueをinputのvalue値で追加。
    // デフォルトから考えると、{from: "", to: ""}をまず展開する。
    // input要素のnameはtoかfromにしてある。onChangeでイベントが発火したinput要素のnameのkey valueを作成して展開したオブジェクトを上書き
    setReplaceObject({ ...replaceObject, [e.target.name]: e.target.value });
  };

  // nameをuseStateのオブジェクトのキーと同じにする。
  // handleReplaceObjectChangeで、...replaceObjectのキー名として「e.target.name」で指定しているから。
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
      <p className="font-semibold">置換：</p>
      <small className="text-gray-400">
        ※「対象」：入力必須
        <br />
        ※「置換後」：未入力のままにすると削除
      </small>
      <div className="flex items-center mt-4">
        <input
          type="text"
          name="from"
          className="w-10/12 rounded-lg"
          placeholder="※対象"
          value={replaceObject.from}
          onChange={handleReplaceObjectChange}
          tabIndex="2"
        />
        <span className="w-2/12 text-center">⇒</span>
        <input
          type="text"
          name="to"
          className="w-10/12 rounded-lg"
          placeholder="※置換後"
          value={replaceObject.to}
          onChange={handleReplaceObjectChange}
          tabIndex="2"
        />
      </div>
    </div>
  );
}
