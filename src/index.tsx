// exports for documentation
export * as Content from "./modules/content";
export * as Sidebar from './modules/sidebar';

// imports of modules
import * as Content from "./modules/content";
import * as Sidebar from './modules/sidebar';
import './style.scss';

// global imports
import { render, JSX } from 'preact';
import { useCallback } from 'preact/hooks';
import { useSignal } from '@preact/signals';

/**
 * Main page component. Renders the sidebar and content.
 * @returns {JSX.Element} The page component.
 * @example
 * import { Page } from './index';
 * render(<Page />, document.body);
 */
export function Page(): JSX.Element {
  const value = useSignal(0);
  const onScroll = useCallback(() => {
    const element = document.getElementById("main");
    value.value = element?.scrollTop || 0;
  }, []);;

  return <>
    <Sidebar.default
      scrollHook={{ value: value, onScroll: onScroll }}
    />
    <Content.default
      scrollHook={{ value: value, onScroll: onScroll }}
    />
  </>;
}

render(<Page />, document.body);
