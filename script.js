const get = id => document.getElementById(id);
get('generate').addEventListener('click', () => {
  const service = get('service').value.trim(), client = get('client').value.trim(), result = get('result').value.trim(), price = get('price').value.trim();
  if (!service || !client || !result || !price) { get('output').value = 'Completa servicio, cliente, resultado y precio.'; return; }
  get('output').value = `PROPUESTA: ${service}\n\nPara: ${client}\n\nObjetivo\nAyudarte a conseguir ${result}.\n\nIncluye\n• Entregables acordados antes de empezar\n• Un plazo definido por escrito\n• Una ronda de ajustes razonables\n\nInversión\nUS$${price}\n\nSiguiente paso\nSi te interesa, responda con el objetivo y fecha que necesita. Confirmaré alcance y disponibilidad antes de iniciar.\n\nMENSAJE INICIAL\nHola, vi [detalle real de su negocio]. Trabajo con ${service} para ayudar a ${client} a conseguir ${result}. Preparé una idea breve y específica; ¿te la comparto?`;
});
for (const id of ['buy', 'buy2']) {
  const button = get(id);
  if (typeof window.CHECKOUT_URL === 'string' && /^https:\/\//.test(window.CHECKOUT_URL)) {
    button.href = window.CHECKOUT_URL;
    button.target = '_blank';
    button.rel = 'noopener';
  } else {
    button.addEventListener('click', event => {
      event.preventDefault();
      get('checkout-note').textContent = 'El creador aún no ha configurado el enlace seguro de compra.';
    });
  }
}
