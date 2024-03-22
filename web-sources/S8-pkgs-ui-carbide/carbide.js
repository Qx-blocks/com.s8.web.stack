import { S8Object } from "/S8-api/S8Object.js";



/**
 * 
 * @param {S8Object} head 
 * @param {function} lambda 
 */
export function forSubComponents(head, lambda){
    
    /* initialize buffer */
    const buffer = new Array();
    buffer.push(head);

    let component, components;
    while(buffer.length > 0){
        let object = buffer.shift();
        if(object){
            if(object.getComponents) { 
                components = object.getComponents();
                if(components){
                    const n = components.length;
                    for(let i=0; i<n; i++) { 
                        if(component = components[i]){ buffer.push(component); }
                    }
                }
                buffer.push();
            }
            lambda(object);
        }
    }
}