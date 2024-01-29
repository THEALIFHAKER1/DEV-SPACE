import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";
import "./LiveIsland.css";

const getVal = (val: number | string) => {
  return typeof val === "number" ? `${val}px` : val;
};

export type LiveIslandProps = {
  className?: string;
  top?: number | string;

  smallClassName?: string;
  smallWidth?: number | string;
  smallHeight?: number | string;

  largeClassName?: string;
  largeWidth?: number | string;
  largeHeight?: number | string;
  largeRadius?: number | string;

  wrapperClassName?: string;
  triggerType?: "click" | "hover";
  initialAnimation?: boolean;

  onChange?: (isSmall: boolean) => void;
  children?: (isSmall: boolean) => ReactNode;
};

const LiveIsland = (props: LiveIslandProps) => {
  const {
    className = "",
    top = 10,

    smallClassName = "",
    smallWidth = 96,
    smallHeight = 30,

    largeClassName = "",
    largeWidth = 400,
    largeHeight = 180,
    largeRadius = 36,

    wrapperClassName = "",
    triggerType = "click",
    initialAnimation = false,

    onChange,
    children,
  } = props;

  const [isHide, setIsHide] = useState(true);
  const hasMount = useRef(false);

  useEffect(() => {
    setIsHide(false);
    setTimeout(() => (hasMount.current = true), 10);
  }, []);

  const [isSmall, setIsSmall] = useState(true);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  const onOpen = () => {
    const canVibrate = "vibrate" in navigator;
    if (canVibrate) {
      navigator.vibrate([
        100, 30, 100, 30, 100, 30, 200, 30, 200, 30, 200, 30, 100, 30, 100, 30,
        100,
      ]);
    }
    setIsSmall(false);
    onChangeRef.current?.(true);
  };

  const onClose = () => {
    setIsSmall(true);
    onChangeRef.current?.(false);
  };

  const isClickType = triggerType === "click";

  useEffect(() => {
    if (isClickType) {
      const onScroll = () => onClose();

      window.addEventListener("scroll", onScroll, true);
      return () => {
        window.removeEventListener("scroll", onScroll, true);
      };
    }
  }, [isClickType]);

  return (
    <div
      hidden={isHide}
      className={`live-island-wrapper fixed inset-x-0 top-[--top] z-[9999] ${wrapperClassName}`}
      style={
        {
          "--top": getVal(top),
          "--small-width": getVal(smallWidth),
          "--small-height": getVal(smallHeight),
          "--large-width": getVal(largeWidth),
          "--large-height": getVal(largeHeight),
          "--large-radius": getVal(largeRadius),
        } as CSSProperties
      }
    >
      {isClickType && (
        <div
          className={`live-island-overlay ${isSmall ? "" : "fixed inset-0"}`}
          onClick={onClose}
        />
      )}

      <div
        className={`live-island absolute left-1/2 top-0 h-[--small-height] w-[--small-width] overflow-hidden rounded-[--small-height] bg-black text-white [box-shadow:inset_0_0_0_1.5px_rgb(255_255_255/0.15),0_1px_2px_rgb(0_0_0/0.2)] [transform:translate(-50%)_scale(var(--scale,1))] [&>*]:duration-200 ${className} ${
          isSmall
            ? `${smallClassName} cursor-pointer select-none duration-300 hover:[--scale:1.05] ${
                initialAnimation || hasMount.current
                  ? "animate-[turn-to-small_0.4s_ease-out_both]"
                  : ""
              }`
            : `${largeClassName} animate-[turn-to-large_0.4s_ease-out_both]`
        }`}
        {...(isClickType
          ? { onClick: onOpen }
          : { onMouseEnter: onOpen, onMouseLeave: onClose })}
      >
        {children?.(isSmall)}
      </div>
    </div>
  );
};

export default LiveIsland;
