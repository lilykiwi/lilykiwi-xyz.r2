import { render } from 'preact';
import './style.scss';
import { useCallback } from 'preact/hooks';
import { Sidebar, Content } from './modules/exports';
import { useSignal } from '@preact/signals';

function Page() {
  const value = useSignal(0);
  const onScroll = useCallback(() => {
    const element = document.getElementById("main");
    console.log(element?.scrollTop)
    value.value = element?.scrollTop || 0;
  }, []);;

  return <>
    <Sidebar
      scrollHook={{ value: value, onScroll: onScroll }}
    />
    <Content
      scrollHook={{ value: value, onScroll: onScroll }}
    />
  </>;
}


render(<Page />, document.body);
