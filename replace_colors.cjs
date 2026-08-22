const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.css')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk(path.join(__dirname, 'src'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Replace Tailwind arbitrary classes with standard indigo classes
    content = content.replace(/text-\[\#4f46e5\]/g, 'text-indigo-600');
    content = content.replace(/bg-\[\#4f46e5\]/g, 'bg-indigo-600');
    content = content.replace(/border-\[\#4f46e5\]/g, 'border-indigo-600');
    content = content.replace(/ring-\[\#4f46e5\]/g, 'ring-indigo-600');
    content = content.replace(/fill-\[\#4f46e5\]/g, 'fill-indigo-600');
    content = content.replace(/hover:bg-\[\#4338ca\]/g, 'hover:bg-indigo-700'); // hover variant
    
    // Replace raw hex codes in TS data files and TSX logic
    content = content.replace(/'#4f46e5'/g, "'#2E6F40'");
    content = content.replace(/"#4f46e5"/g, '"#2E6F40"');
    content = content.replace(/'#4338ca'/g, "'#68BA7F'");
    content = content.replace(/"#4338ca"/g, '"#68BA7F"');
    content = content.replace(/'#fff3ee'/g, "'#CFFFDC'");
    
    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
    }
});
