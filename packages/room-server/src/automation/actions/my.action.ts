import { AutomationAction } from './decorators/automation.action.decorator'
import { IBaseAction } from './interface/base.action'
import { IActionResponse } from './interface/action.response';
import { IUiSchema } from './interface/base.action';
import { IJsonSchema } from '@apitable/core';
import { ResponseStatusCodeEnums } from './enum/response.status.code.enums';


@AutomationAction('my')
export class MyAction implements IBaseAction {
  async endpoint(input: any): Promise<IActionResponse<any>> {
    console.log(`Entry customer connector. the input is ${input && input.info}`);
    return Promise.resolve({
      success: true,
      code: ResponseStatusCodeEnums.Success,
      data: { data: '' }
    });
  }

  getInputSchema(): IJsonSchema {
    return {
      type: 'object',
      properties: {
        info: {
          type: 'string',
          title: 'info',
        },
      },
    };
  }

  getOutputSchema(): IJsonSchema {
    return {
      type: 'object',
      required: ['message'],
      properties: {
        message: {
          type: 'string',
          title: 'action execute result',
        },
      }
    };
  }

  getUISchema(): IUiSchema {
    return {'ui:order': ['message']}
  }
}
