import './style.scss';

import { Navbar } from 'components/navbar';

// global imports
import { render, JSX } from 'preact';
import { useCallback } from 'preact/hooks';
import { useSignal } from '@preact/signals';
import { Title } from 'components/heroTitle';
import { Repositories } from 'components/repos';

/**
 * Main page component. Renders the sidebar and content.
 * @returns {JSX.Element} The primary page component.
 */
export function Page(): JSX.Element {
  const value = useSignal(0);
  const onScroll = useCallback(() => {
    const element = document.getElementById("main");
    value.value = element?.scrollTop || 0;
  }, []);

  return <>
    <Navbar />
    <Title text="lilykiwi.xyz" />
    <Repositories />
  </>;
}

render(<Page />, document.body);
