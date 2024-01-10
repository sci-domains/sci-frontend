import React from 'react';

const InstallPluginPage = () => {
    const snapId = 'YOUR_SNAP_ID'; // Replace with your snap ID

    const isSnapInstalled = async () => {
        try {
            // Check if MetaMask and Ethereum object are available
            if (window.ethereum) {
                const snaps = await window.ethereum.request({ method: 'wallet_getSnaps' });
                return snaps.hasOwnProperty(snapId);
            }
        } catch (error) {
            console.error('Error checking for installed snaps:', error);
        }
        return false;
    };

    const installSnap = async () => {
        if (typeof window.ethereum !== 'undefined') {
            try {
                // Check if the snap is already installed
                if (await isSnapInstalled()) {
                    console.log('Snap is already installed');
                    return;
                }

                // Request to add the snap
                await window.ethereum.request({
                    method: 'wallet_enable',
                    params: [{
                        wallet_snap: { [snapId]: {} },
                    }],
                });
                console.log('Snap Installed');
            } catch (error) {
                console.error('Error installing snap:', error);
            }
        } else {
            console.log('MetaMask is not installed');
        }
    };

    return (
        <div>
            <h1>Install MetaMask Snap</h1>
            <button onClick={installSnap}>Install Snap</button>
        </div>
    );
};

export default InstallPluginPage;
