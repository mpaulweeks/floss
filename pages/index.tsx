import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Splash } from '@/comp/Splash'
import { Settings, defaultSettings } from '@/types';
import { Overlay } from '@/comp/overlay/Overlay';
import rainbowStyles from '@/styles/Rainbow.module.css';
import { Fullscreen } from '@/comp/Fullscreen';

export default function Home() {
  const [settings, setSettings] = useState<Settings>(defaultSettings());
  const [showOverlay, setShowOverlay] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    if (window.location.search.includes('skip')) {
      setConfirmed(true);
    }
  }, [setConfirmed]);

  return (
    <>
      <Head>
        <title>Floss</title>
        <link rel="shortcut icon"       href="favicon.png" />
        <meta name="viewport"           content="width=device-width, initial-scale=1" />
        <meta property="og:url"         content="https://floss.mpaulweeks.com" />
        <meta property="og:type"        content="video.other" />
        <meta property="og:title"       content="floss" />
        <meta property="og:description" content="dead meme" />
        <meta property="og:image"       content="https://floss.mpaulweeks.com/favicon.png" />
      </Head>
      <main className={rainbowStyles.rainbow}>
        {confirmed ? (
          <Fullscreen
            settings={settings}
            setShowOverlay={setShowOverlay}
          />
        ) : (
          <Splash
            settings={settings}
            setShowOverlay={setShowOverlay}
            onConfirm={() => setConfirmed(true)}
          />
        )}
        <Overlay
          visible={showOverlay} setVisible={setShowOverlay}
          settings={settings} setSettings={setSettings}
        />
      </main>
    </>
  )
}
