import { createContext, render } from 'preact';
import './style.scss';
import { signal, Signal, useSignal, useSignalEffect } from '@preact/signals';

import { Sidebar, Content } from './modules/exports';

const scrollFromTop = signal(0);

const Page = <>
  <Sidebar signal={scrollFromTop} />
  <Content signal={scrollFromTop} />
</>;

function handler() {
  scrollFromTop.value = document.documentElement.scrollTop;
}
document.addEventListener("scroll", handler, { passive: true })
render(Page, document.body);