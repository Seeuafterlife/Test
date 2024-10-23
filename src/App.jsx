import React, { useState } from 'react';
import './App.css';

const hinhAnh = [
  'https://picsum.photos/300/200?image=0',
  'https://picsum.photos/300/200?image=1',
  'https://picsum.photos/300/200?image=2',
  'https://picsum.photos/300/200?image=3',
  'https://picsum.photos/300/200?image=4',
];

function App() {
  const [chiSoHienTai, setChiSoHienTai] = useState(0);

  const hinhTiepTheo = () => {
    setChiSoHienTai((chiSoTruoc) =>
      chiSoTruoc === hinhAnh.length - 1 ? 0 : chiSoTruoc + 1
    );
  };

  const hinhTruocDo = () => {
    setChiSoHienTai((chiSoTruoc) =>
      chiSoTruoc === 0 ? hinhAnh.length - 1 : chiSoTruoc - 1
    );
  };

  const quayLaiDau = () => {
    setChiSoHienTai(0);
  };

  return (
    <>
      <h1>Trình Chiếu Ảnh</h1>
      <div>
        <img src={hinhAnh[chiSoHienTai]} alt="trình chiếu" />
        <div>
          <button onClick={hinhTruocDo}>Trước</button>
          <button onClick={hinhTiepTheo}>Tiếp theo</button>
          <button onClick={quayLaiDau}>Quay lại đầu</button>
        </div>
      </div>
    </>
  );
}

export default App;
