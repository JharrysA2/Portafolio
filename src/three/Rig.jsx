import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";

export default function Rig({ scrollRef }) {
  const { camera } = useThree();
  const target = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    const { pointer } = state;
    target.current.x += (pointer.x * 0.6 - target.current.x) * 0.04;
    target.current.y += (pointer.y * 0.4 - target.current.y) * 0.04;

    const scrollProgress = scrollRef?.current ?? 0;

    camera.position.x += (target.current.x - camera.position.x) * 0.06;
    camera.position.y += (target.current.y - scrollProgress * 1.4 - camera.position.y) * 0.06;
    camera.position.z = 6.4;
    camera.lookAt(0, -scrollProgress * 1.4 * 0.6, 0);
  });

  return null;
}
