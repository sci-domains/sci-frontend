import { Snap } from '@/types/snap';

/**
 * Get the installed snaps in MetaMask.
 *
 * @returns The snaps installed in MetaMask.
 */
export const getSnaps = async (): Promise<Record<string, Snap>> => {
  return (await window.ethereum.request({
    method: 'wallet_getSnaps',
  })) as unknown as Record<string, Snap>;
};

/**
 * Install a snap to MetaMask.
 *
 * @param snapId - The ID of the snap.
 * @param params - The params to pass with the snap to connect.
 */
export const installSnap = async (
  snapId: string,
  params: Record<string, unknown> = {},
) => {
  await window.ethereum.request({
    method: 'wallet_requestSnaps',
    params: {
      [snapId]: params,
    },
  });
};

/**
 * Get installed snap from MetaMask.
 *
 * @param snapId - The ID of the snap.
 * @param version - The version of the snap to install (optional).
 * @returns The snap object returned by the extension.
 */
export const getSnap = async (
  snapId: string,
  version?: string,
): Promise<Snap | undefined> => {
  try {
    const snaps = await getSnaps();

    return Object.values(snaps).find(
      (snap) => snap.id === snapId && (!version || snap.version === version),
    );
  } catch (error) {
    console.log('Failed to obtain installed snap', error);
    return undefined;
  }
};
/**
 * Check if a snap is installed in MetaMask.
 *
 * @param snapId - The ID of the snap.
 * @param version - The version of the snap to install (optional).
 * @returns boolean
 */
export const hasSnap = async (
  snapId: string,
  version?: string,
): Promise<boolean> => {
  return (await getSnap(snapId, version)) !== undefined;
};

export const isLocalSnap = (snapId?: string): boolean | undefined => {
  if (snapId === null) {
    return false;
  }
  return snapId?.startsWith('local:');
};