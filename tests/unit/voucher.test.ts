import voucherService from '../../src/services/voucherService';
import { faker } from '@faker-js/faker';

jest.mock('../../src/services/voucherService.ts')

describe('Teste unitário do voucher', () => {
  it('Testa a aplicação de um voucher', async () => {
    const code  = faker.random.alphaNumeric(10)
    const discount = faker.datatype.number({
        min:1,
        max: 100 })

    const amount = 200

    await voucherService.createVoucher(code, discount)

   const result = await voucherService.applyVoucher(code, amount)

   

    expect(result.amount).toBe(amount);
    expect(result.applied).toBe(true);
    expect(result.finalAmount).toBe(amount - amount * (discount / 100));
     expect(result.discount).toBe(discount);
  });

  
});