const Ziggy = {"url":"https:\/\/kurtobando.com","port":null,"defaults":{},"routes":{"sanctum.csrf-cookie":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"]},"telescope":{"uri":"telescope\/{view?}","methods":["GET","HEAD"],"wheres":{"view":"(.*)"}},"ignition.healthCheck":{"uri":"_ignition\/health-check","methods":["GET","HEAD"]},"ignition.executeSolution":{"uri":"_ignition\/execute-solution","methods":["POST"]},"ignition.updateConfig":{"uri":"_ignition\/update-config","methods":["POST"]},"about":{"uri":"\/","methods":["GET","HEAD"]},"projects":{"uri":"projects","methods":["GET","HEAD"]},"projects.show":{"uri":"projects\/{slug}","methods":["GET","HEAD"]},"contact":{"uri":"contact","methods":["GET","HEAD"]},"contact.store":{"uri":"contact","methods":["POST"]},"sign-in":{"uri":"sign-in","methods":["GET","HEAD"]},"sign-in.store":{"uri":"sign-in","methods":["POST"]},"sign-out":{"uri":"sign-out","methods":["POST"]},"dashboard":{"uri":"dashboard","methods":["GET","HEAD"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };
