export type database = {
  object: string,
  id: string,
  created_time: string,
  last_edited_time: string,
  title: [{
      type: 'text',
      text: [Record<string, unknown>],
      annotations: [Record<string, unknown>],
      plain_text: 'BackEnd',
      href: null
    }],
  properties: {
    Created: { id: string, type: string, created_time: Record<string, unknown>},
    Command: { id: string, type: string, rich_text: Record<string, unknown>},
    Name: { id: string, type: string, title: Record<string, unknown>}
  }
};

// export function = (port: string, callback: (err: Error, address: string) => void): void;