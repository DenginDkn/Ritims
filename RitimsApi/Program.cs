using System;
using Microsoft.EntityFrameworkCore;
using RitimsApi.DataContext;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();

var Configuration = builder.Configuration;
builder.Services.AddDbContext<UserContext>(options =>
    options.UseNpgsql(Configuration.GetConnectionString("DefaultConnection")));


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(builder => builder
    .AllowAnyOrigin() // Tüm originlere izin ver
    .AllowAnyMethod()
    .AllowAnyHeader());



app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
