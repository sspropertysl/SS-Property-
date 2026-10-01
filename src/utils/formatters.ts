export function formatPrice(lkr: number, usd: number, currency: 'LKR' | 'USD'): string {
  if (currency === 'USD') {
    return `$${usd.toLocaleString('en-US')}`;
  }

  // Format in LKR with intuitive readable millions
  if (lkr >= 1000000) {
    const millions = (lkr / 1000000).toFixed(lkr % 1000000 === 0 ? 0 : 1);
    return `LKR ${millions} Mn`;
  }
  
  return `LKR ${lkr.toLocaleString('en-US')}`;
}

export function formatPriceDetailed(lkr: number, usd: number): { lkrStr: string; usdStr: string } {
  const lkrFormatted = lkr.toLocaleString('en-LK', { style: 'currency', currency: 'LKR', maximumFractionDigits: 0 }).replace('LKR', 'Rs.');
  const usdFormatted = usd.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
  return { lkrStr: lkrFormatted, usdStr: usdFormatted };
}
