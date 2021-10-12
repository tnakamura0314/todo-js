import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する処理
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

/**
 * 未完了リストから指定の要素を削除する関数
 * */
const deleteFromIncompleteList = (target) => {
  //該当のliタグを削除
  document.getElementById("incomplete-list").removeChild(target);
};

/**
 * 未完了のリストに追加する関数
 * */
const createIncompleteList = (text) => {
  //liタグ生成
  const li = document.createElement("li");

  //divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  //pタグ生成
  const p = document.createElement("p");
  p.innerText = text;

  //button(完了)生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  //button(削除)生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  //liタグの子要素に各要素を設定
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  /**
   * 完了ボタンをクリック時にイベント発火
   * */
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ(li)を未完了リストから削除
    //divタグ配下の子要素をまとめる
    const deleteTarget = completeButton.parentNode;

    //liタグ配下の子要素をまとめる
    //該当のliタグを削除
    deleteFromIncompleteList(deleteTarget.parentNode);
    //完了リストに追加する
    const addTarget = completeButton.parentNode;

    //inputしたテキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //liタグを生成
    const li = document.createElement("li");
    li.innerText = text;

    //戻すbuttonタグの生成
    const backButton = document.createElement("button");
    backButton.innerHTML = "戻す";
    backButton.className = "back-button";

    // 戻すボタンの実装
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode;
      const deleteTargetAll = deleteTarget.parentNode;
      document.getElementById("complete-list").removeChild(deleteTargetAll);

      //テキストを取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    ///divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    // console.log(addTarget);

    //上記で生成したdivから下の子要素たちをliに設定
    const addTargetAll = addTarget.parentNode;

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTargetAll);
  });

  /**
   * 削除ボタンをクリック時にイベント発火
   * */
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(li)を未完了リストから削除
    //divタグ配下の子要素をまとめる
    const deleteTarget = deleteButton.parentNode;
    //liタグ配下の子要素をまとめる
    //該当のliタグを削除
    deleteFromIncompleteList(deleteTarget.parentNode);
  });

  /**
   * 未完了リストに追加
   * */
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
