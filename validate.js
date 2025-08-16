#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Try to load AJV, provide fallback if not installed
let Ajv, addFormats;
try {
  Ajv = require('ajv');
  addFormats = require('ajv-formats');
} catch (error) {
  console.log('📦 AJV not installed. Install with: npm install ajv ajv-formats');
  console.log('🔄 Performing basic JSON validation instead...\n');
}

function validateJSON(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    JSON.parse(content);
    return { valid: true };
  } catch (error) {
    return { valid: false, error: error.message };
  }
}

function validateWithSchema(schemaPath, dataPath) {
  if (!Ajv) {
    return validateJSON(dataPath);
  }

  try {
    const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    
    const ajv = new Ajv({ allErrors: true });
    addFormats(ajv);
    
    const validate = ajv.compile(schema);
    const valid = validate(data);
    
    return {
      valid,
      errors: validate.errors || []
    };
  } catch (error) {
    return { valid: false, error: error.message };
  }
}

function main() {
  console.log('🔍 Browser Extension Metadata Validator\n');
  
  const schemaPath = './extension-metadata-schema.json';
  const examplePath = './vimeo-video-downloader-metadata.json';
  
  // Check if files exist
  if (!fs.existsSync(schemaPath)) {
    console.error(`❌ Schema file not found: ${schemaPath}`);
    process.exit(1);
  }
  
  if (!fs.existsSync(examplePath)) {
    console.error(`❌ Example file not found: ${examplePath}`);
    process.exit(1);
  }
  
  // Validate schema itself
  console.log('1️⃣ Validating schema file...');
  const schemaValidation = validateJSON(schemaPath);
  if (!schemaValidation.valid) {
    console.error(`❌ Schema is invalid: ${schemaValidation.error}`);
    process.exit(1);
  }
  console.log('✅ Schema file is valid JSON\n');
  
  // Validate example data
  console.log('2️⃣ Validating example metadata...');
  const dataValidation = validateWithSchema(schemaPath, examplePath);
  
  if (dataValidation.valid) {
    console.log('✅ Example metadata is valid!\n');
    
    // Show some statistics
    const data = JSON.parse(fs.readFileSync(examplePath, 'utf8'));
    console.log('📊 Metadata Statistics:');
    console.log(`   Title: ${data.title}`);
    console.log(`   Version: ${data.version.current}`);
    console.log(`   Screenshots: ${data.media?.screenshots?.length || 0}`);
    console.log(`   Videos: ${data.media?.videos?.length || 0}`);
    console.log(`   Features: ${data.features?.live?.length || 0}`);
    console.log(`   Keywords: ${data.keywords?.length || 0}`);
    console.log(`   Compatible Browsers: ${data.compatibility?.browsers?.length || 0}`);
    
  } else if (dataValidation.errors) {
    console.error('❌ Validation failed with errors:');
    dataValidation.errors.forEach((error, index) => {
      console.error(`   ${index + 1}. ${error.instancePath || 'root'}: ${error.message}`);
      if (error.data !== undefined) {
        console.error(`      Got: ${JSON.stringify(error.data)}`);
      }
    });
    process.exit(1);
  } else {
    console.error(`❌ Validation failed: ${dataValidation.error}`);
    process.exit(1);
  }
  
  console.log('\n🎉 All validations passed!');
}

if (require.main === module) {
  main();
}

module.exports = { validateWithSchema, validateJSON };