import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する処理
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //liタグ生成
  const li = document.createElement("li");

  //divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  //pタグ生成
  const p = document.createElement("p");
  p.innerText = inputText;

  //button(完了)生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  //完了ボタンをクリック時にイベント発火
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  //button(削除)生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  //削除ボタンをクリック時にイベント発火
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(li)を未完了リストから削除
    //divタグ配下の子要素をまとめる
    const deleteTarget = deleteButton.parentNode;

    //liタグ配下の子要素をまとめる
    const deleteTargetAll = deleteTarget.parentNode;
    console.log(deleteTargetAll);

    //該当のliタグを削除
    document.getElementById("incomplete-list").removeChild(deleteTargetAll);
  });

  //liタグの子要素に各要素を設定
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
