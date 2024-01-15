type SnapPermissions = Record<string, unknown>;

export type Snap = {
  permissionName: string;
  id: string;
  version: string;
  initialPermissions: SnapPermissions;
  blocked: boolean;
  enabled: boolean;
};
