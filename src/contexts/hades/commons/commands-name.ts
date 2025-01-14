export const HADES_CLIENT_CONTEXT_PROXY_NAME = 'HADES_CLIENT_CONTEXT_PROXY_NAME';

export const COMMANDS_HADES = {
  ROLE: {
    CREATE: 'HADES.ROLE.CREATE',
    UPDATE: 'HADES.ROLE.UPDATE',
    ARCHIVE: 'HADES.ROLE.ARCHIVE',
    DESTROY: 'HADES.ROLE.DESTROY',
    LIST: 'HADES.ROLE.LIST',
    GET: 'HADES.ROLE.GET',
  },
  USER: {
    CREATE: 'HADES.USER.CREATE',
    UPDATE: 'HADES.USER.UPDATE',
    ARCHIVE: 'HADES.USER.ARCHIVE',
    DESTROY: 'HADES.USER.DESTROY',
    LIST: 'HADES.USER.LIST',
    GET: 'HADES.USER.GET',
  },
  SESSION: {
    CREATE_ACTIVE: 'HADES.SESSION.CREATE.ACTIVE',
    CREATE_INVALID: 'HADES.SESSION.CREATE.INVALID',
    UPDATE: 'HADES.SESSION.UPDATE',
    INCREMENT_FAILED_ATTEMPTS: 'HADES.SESSION.INCREMENT_FAILED_ATTEMPTS',
    ACTIVATE_INVALID: 'HADES.SESSION.ACTIVATE_INVALID',
    TRANSITION_STATUS: 'HADES.SESSION.TRANSITION_STATUS',
    ARCHIVE: 'HADES.SESSION.ARCHIVE',
    DESTROY: 'HADES.SESSION.DESTROY',
    LIST: 'HADES.SESSION.LIST',
    GET: 'HADES.SESSION.GET',
  },
};
