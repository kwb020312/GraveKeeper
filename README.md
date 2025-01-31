# GraveKeeper

![ghost](https://github.com/kwb020312/GraveKeeper/assets/46777310/6217e8ef-038d-43c9-81cc-effb81f0e016)

### 🤔어떤 역할을 하나요?

👻할로윈을 맞이해 ThreeJS Drei 라이브러리를 활용하여 [으스스한 공동묘지](https://grave-keeper.vercel.app/) 만들기, Float, Sparkles, GodRays(중요!) 학습하기 위해 제작된 `개인 공부용` 프로젝트

우선, `GodRays`란? 직역 그대로 신의 직사광선을 의미하며 전방의 피사체에 가려지는 빛을 의미한다. 

```javascript
const mesh = new Mesh(
  new CylinderGeometry(0.3, 0.3, 0.2, 20),
  new MeshBasicMaterial({
    color: lightColor,
    transparent: true,
    opacity: 1,
  })
);

<GodRays
 sun={mesh} // 광원, 현재 프로젝트에선 원뿔형 물체에 기본 질감을 입혀 사용하였음(포털 내부 최상단 광원)
 blendFunction={BlendFunction.Screen} // 화면 전체에 적용
 samples={40} // 
 density={0.97} // 빛의 밀도, 얼마나 퍼지나
 decay={0.97} // 거리에 따른 눈부심의 감쇠도
 weight={0.6} // 빛의 양
 exposure={0.3} // 노출, 빛의 밝기
 clampMax={1} // 광원의 이동
 width={Resizer.AUTO_SIZE} // 가로 폭
 height={Resizer.AUTO_SIZE} // 세로 폭
 kernelSize={KernelSize.SMALL} // blur 크기
 blur={true} // blur 여부
/>
```

---

### 😊어떻게 실행하나요?

필요모듈 설치
```
npm install
```

로컬환경에 실행 (localhost:5173)
```
npm run dev
```

---

### 🤔어떤 기술이 사용되었나요?

- Framework
  - React(Vite)
    - "react": "^18.2.0"
- etc
  - ThreeJS
    - "@react-three/drei": "9.14.3",
    - "@react-three/fiber": "8.0.26",
    - "@react-three/postprocessing": "2.4.4",

---

### 😎UI는 어떤가요?

![image](https://github.com/kwb020312/GraveKeeper/assets/46777310/b1ce7e68-3485-4330-8398-8815bf74f6a2)

![image](https://github.com/kwb020312/GraveKeeper/assets/46777310/97521142-fca6-42bd-abc2-a8d56da4e812)

![image](https://github.com/kwb020312/GraveKeeper/assets/46777310/99611ab9-ca84-469a-9f62-1bc0ad17797c)

---

### 😶문제가 있어요..

이슈사항을 등록해주시면 바로 확인해보겠습니다.

---

### 😙정보

`2023-11-08` 배포 및 정상동작 확인

